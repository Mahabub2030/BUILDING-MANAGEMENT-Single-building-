import React from "react";
import { Link } from "react-router-dom";
import error from "../../../../src/assets/Error.jpg"

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center">
      <img src={error} alt="404 Not Found" className="w-96 mb-6" />
      <h1 className="text-3xl font-bold mb-2">Oops! Page Not Found!</h1>
      <p className="mb-4 text-gray-600">
        The page you requested was not found.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
