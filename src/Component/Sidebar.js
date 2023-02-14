import React from "react";
import { useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="shadow-lg p-5 border ml-2">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Live</li>
        <li>Originals</li>
        <li>Youtube music</li>
      </ul>
      <h1 className="font-bold pt-5">Subcriptions</h1>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subcriptions</li>
        <li>Originals</li>
        <li>Youtube music</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Playlist 1</li>
        <li>Playlist 2</li>
        <li>Playlist 3</li>
        <li>Playlist 4</li>
        <li>Playlist 5</li>
      </ul>
    </div>
  );
};

export default Sidebar;
