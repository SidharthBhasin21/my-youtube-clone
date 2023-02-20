import React from "react";
import Comment from "./Comment";

const commentData = [
  {
    name: "User Name",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    replies: [
      {
        name: "User Name",
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
        replies: [
          {
            name: "User Name",
            description:
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "User Name",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
    replies: [],
  },
  {
    name: "User Name",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
    replies: [
      {
        name: "User Name",
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
        replies: [],
      },
    ],
  },
  {
    name: "User Name",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
    replies: [
      {
        name: "User Name",
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
        replies: [
          {
            name: "User Name",
            description:
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "User Name",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
    replies: [],
  },
];

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentContainer = () => {
  return (
    <div className="m-3 p-2">
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
