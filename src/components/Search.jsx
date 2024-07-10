import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import Camera from "../assets/cam.png";
import Mic from "../assets/mic.png";
import { useDispatch, useSelector } from "react-redux";
import { selectSearch, getAllSearch } from "../features/search/searchSlice";

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const results = useSelector(selectSearch);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      await dispatch(getAllSearch());
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex flex-col items-center w-full ">
      <form
        onSubmit={handleSearch}
        className="flex items-center gap-2 w-full md:w-[45%] mx-0 rounded-full border border-spacing-1 border-[#313034] hover:bg-[#313034] px-6"
      >
        <IoIosSearch
          className="font-semibold text-2xl cursor-pointer text-slate-400"
          onClick={handleSearch}
        />
        <input
          type="text"
          className="w-full p-3 outline-none bg-inherit text-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="flex items-center">
          <img src={Mic} alt="Microphone" className="w-8" />
          <img src={Camera} alt="Camera" className="w-8" />
        </div>
      </form>

      <div className="mt-4 w-full md:w-1/2">
        {results.map((result, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 cursor-pointer hover:bg-primary rounded-md"
          >
            <img
              src={result.picture.thumbnail}
              alt={result.name.first}
              className="w-10 h-10 rounded-full"
            />
            <div className="hover:text-blue-500 w-full">
              <h3 className="text-lg  font-medium">{`${result.name.first} ${result.name.last}`}</h3>
              <p className="text-sm text-gray-500">{result.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
