import { useEffect } from "react";

const LinkedInFeed = () => {
  useEffect(() => {
    // Check if script already exists to prevent duplicate loading
    if (!document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.ElfsightApp) {
          window.ElfsightApp.init(); // Initialize Elfsight after script loads
        }
      };
    } else if (window.ElfsightApp) {
      window.ElfsightApp.init(); // Reinitialize if script is already present
    }
  }, []);

  return (
    <div className="mt-10">
      <div
        className="elfsight-app-a0a870c9-a9d9-4c06-8273-9e2492575bfe"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default LinkedInFeed;
