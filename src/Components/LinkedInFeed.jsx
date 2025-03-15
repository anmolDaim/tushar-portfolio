import { useEffect } from "react";

const LinkedInFeed = () => {
  useEffect(() => {
    // Load the Elfsight script dynamically
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.onload = () => {
      // Reinitialize Elfsight widgets after script loads
      if (window.ElfsightApp) {
        window.ElfsightApp.init();
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        className="m-20 elfsight-app-a0a870c9-a9d9-4c06-8273-9e2492575bfe"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default LinkedInFeed;
