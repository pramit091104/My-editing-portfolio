import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { NOT_FOUND } from "@/constants/uiTexts";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{NOT_FOUND.heading}</h1>
        <p className="text-xl text-gray-600 mb-4">{NOT_FOUND.message}</p>
        <a href={NOT_FOUND.backPath} className="text-blue-500 hover:text-blue-700 underline">
          {NOT_FOUND.backLabel}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
