import React from "react";
import { useSelector } from "react-redux/es/exports";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="shadow-lg p-5 border">
      <ul>
        <li>Home</li>
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
        <li>Home</li>
        <li>Shorts</li>
        <li>Subcriptions</li>
        <li>Originals</li>
        <li>Youtube music</li>
      </ul>
    </div>
  );
};

export default Sidebar;
