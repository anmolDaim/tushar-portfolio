import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Reading = () => {
  const { id, email } = useParams(); // Get id & email from URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);

        if (!email || !id) {
          setError("Invalid blog reference.");
          setLoading(false);
          return;
        }

        const blogRef = doc(db, "blogs", email, "blogItems", id);
        const blogSnap = await getDoc(blogRef);

        if (blogSnap.exists()) {
          setBlog(blogSnap.data());
        } else {
          setError("Blog not found.");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        setError("Error fetching blog.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id, email]);

  if (loading) return <div className="text-center text-lg text-gray-500">Loading...</div>;

  if (error) return <div className="text-center text-lg text-red-500">{error}</div>;

  return (
    <div className="m-6">
      <h2 className="text-lg p-12 rounded-2xl font-medium rounded-1xl sm:text-2xl lg:text-6xl text-center tracking-wide bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
       Blog
      </h2>
     <img
        src={blog.imageUrl}
        alt={blog.title}
        className="w-full  h-100 object-cover sm:h-screen  rounded-2xl mt-10"
      />
      <div className="sm:p-10 pt-10">
      <h2 className="text-3xl text-white mb-6">{blog.title}</h2>
      <p className="text-1xl text-gray-500">{blog.author}</p>
      <p className="text-gray-300  mb-10">{blog.timestamp != null ? blog.timestamp : "No timestamp"}</p>
      <p className="text-lg">{blog.description}</p>
      </div>
      
    </div>
  );
};

export default Reading;
