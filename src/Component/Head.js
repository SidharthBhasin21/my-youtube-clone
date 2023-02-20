import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((state) => state.search);
  useEffect(() => {
    // getSearchSuggestions();
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const dispatch = useDispatch();

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    dispatch(cacheResults);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5  m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          className="h-8 cursor-pointer"
        />
        <img
          alt="Logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          className="h-8 mx-5 cursor-pointer "
        />
      </div>
      <div className="col-span-10">
        <div>
          <input
            type="text"
            className="w-1/2 border border-gray-400 p-2 px-4 rounded-l-full"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="p-2 border border-gray-400 rounded-r-full">
            Search
          </button>
          {showSuggestions && suggestions.length ? (
            <div className="fixed bg-white py-2 w-[33rem] rounded-lg border ">
              <ul>
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className=" px-4 py-1 shadow-sm hover:bg-gray-100  "
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
      <div className="col-span-1">
        <img
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Head;
