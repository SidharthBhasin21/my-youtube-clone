import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "coding",
    "Java",
    "Js",
    "Games",
    "Standup",
    "Comedy",
    "Reactjs",
    "Programming",
  ];
  return (
    <div className="flex ">
      {list.map((item, index) => (
        <Button name={item} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
