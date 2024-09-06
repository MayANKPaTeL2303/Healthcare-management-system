import { NavLink } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <section className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-6xl font-bold text-red-500">404</h2>
          <h4 className="text-xl font-semibold mt-4">Sorry! Page not found</h4>
          <p className="mt-2 text-gray-600">
            Oops! It seems like the page you're trying to access doesn't exist.
            If you believe there's an issue, feel free to report it, and we'll
            look into it.
          </p>
          <div className="mt-6 space-x-4">
            <NavLink
              to="/"
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Return Home
            </NavLink>
            <NavLink
              to="/contact"
              className="inline-block px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Report Problem
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};
