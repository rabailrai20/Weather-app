import { useState } from "react"
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";


const SearchBar = ({onSearch}) => {
const [city, setCity] = useState("");
    const handleSubmit = (e) => {
    e.preventDefault();

onSearch(city)  
};

  return (
    <>
   <form
  onSubmit={handleSubmit}
  className="max-w-xl mx-auto mt-8"
>
  <div className="relative">

    <FaMapMarkerAlt
      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
    />

    <input
      type="text"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      placeholder="Search city..."
      className="w-full pl-12 pr-16 py-4 rounded-full border border-gray-300
      shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
    />

    <button
      type="submit"
      className="absolute right-2 top-1/2 -translate-y-1/2
      bg-indigo-600 hover:bg-indigo-700
      text-white p-3 rounded-full transition"
    >
      <FaSearch />
    </button>

  </div>
</form>
    </>
  )
}

export default SearchBar;
