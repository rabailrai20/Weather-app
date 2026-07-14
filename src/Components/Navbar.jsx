import { FaCloudSun } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 shadow-md">
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-20 flex items-center">
          <FaCloudSun className="text-yellow-300 text-4xl mr-3" />

          <div>
            <h1 className="text-3xl font-bold text-white flex justify-center items-center">
              Weather App
            </h1>

            <p className="text-indigo-200 text-sm flex justify-center items-center">
              Search weather anywhere
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;