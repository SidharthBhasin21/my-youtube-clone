import React from "react";

const Comment = ({ data }) => {
  const { name, description } = data;

  return (
    <div className="flex m-2 bg-gray-100 ">
      <img
        className="w-10 h-10 "
        alt="user"
        src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
      />
      <div>
        <p>{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Comment;
