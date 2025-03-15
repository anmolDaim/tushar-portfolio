import React, { useEffect, useState } from "react";
import Blog_Item from "./Blog_Item";
import { collection, getDocs, query, orderBy, limit, startAfter, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Pulse from "./Pulse";

const PAGE_SIZE = 6;

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [lastDoc, setLastDoc] = useState(null);
  const [adminEmail, setAdminEmail] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAdminEmail();
  }, []);

  // ✅ Fetch Admin Email from Firestore
  const fetchAdminEmail = async () => {
    try {
      const adminQuery = query(collection(db, "blogs"), where("role", "==", "admin"));
      const adminSnapshot = await getDocs(adminQuery);

      if (!adminSnapshot.empty) {
        const firstAdminDoc = adminSnapshot.docs[0]; 
        const email = firstAdminDoc.id;
        setAdminEmail(email);
        //console.log("✅ Admin Email Fetched:", email);

        fetchTotalPages(email);
        fetchBlogs(email);
      } else {
        console.log("❌ No Admin Found!");
      }
    } catch (error) {
      console.error("❌ Error fetching admin email:", error);
    }
  };

  // ✅ Fetch total number of pages
  const fetchTotalPages = async (email) => {
    try {
      const adminDocRef = collection(db, "blogs", email, "blogItems");
      const snapshot = await getDocs(adminDocRef);
      const totalItems = snapshot.size;
      setTotalPages(Math.ceil(totalItems / PAGE_SIZE));
      //console.log("📊 Total Blogs:", totalItems, " | Pages:", Math.ceil(totalItems / PAGE_SIZE));
    } catch (error) {
      console.error("❌ Error fetching total pages:", error);
    }
  };

  // ✅ Fetch blogs based on the page
  const fetchBlogs = async (email, page = 1) => {
    if (loading) return;
    setLoading(true);

    try {
      let q;
      const adminDocRef = collection(db, "blogs", email, "blogItems");

      if (page === 1) {
        q = query(adminDocRef, orderBy("title", "desc"), limit(PAGE_SIZE));
      } else {
        q = query(adminDocRef, orderBy("title", "desc"), startAfter(lastDoc), limit(PAGE_SIZE));
      }

      const querySnapshot = await getDocs(q);
      const blogsArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setBlogs(blogsArray);
      //console.log(`📄 Page ${page} Data:`, blogsArray);

      if (!querySnapshot.empty) {
        setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
      }
    } catch (error) {
      console.error("❌ Error fetching blogs:", error);
    }

    setLoading(false);
  };

  // ✅ Handle Previous Button Click
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      fetchBlogs(adminEmail, currentPage - 1);
      //console.log("⬅️ Going to Previous Page:", currentPage - 1);
    }
  };

  // ✅ Handle Next Button Click
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      fetchBlogs(adminEmail, currentPage + 1);
      //console.log("➡️ Going to Next Page:", currentPage + 1);
    }
  };

  return (
    <div>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">Blogs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {loading? (<Pulse/>):(blogs.map((blog) => (
          <Blog_Item email={adminEmail} key={blog.id} id={blog.id} title={blog.title} desc={blog.description} image={blog.imageUrl} timeStamp={blog.timestamp} />
        )))}
      </div>

      {/* ✅ Pagination Buttons */}
      <div className="flex justify-around space-x-4 my-6">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-lg font-semibold">{`Page ${currentPage} of ${totalPages}`}</span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90% rounded-md disabled:opacity-50 "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Blogs;
