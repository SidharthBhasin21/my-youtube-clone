import React from "react";

const VideoCard = ({ info }) => {
  //   console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  return (
    <div className="p-2 m-2 rounded-lg shadow-md w-56 hover:scale-105">
      <img className="rounded-lg" alt={title} src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li className="italic">{statistics.viewCount}-views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
