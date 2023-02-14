import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

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
        <input
          type="text"
          className="w-1/2 border border-gray-400 p-2 px-4 rounded-l-full"
        />
        <button className="p-2 border border-gray-400 rounded-r-full">
          Search
        </button>
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
