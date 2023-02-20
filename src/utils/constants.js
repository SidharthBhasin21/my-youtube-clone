const API_KEY = "AIzaSyBLP0mSdWgW-rsxt5lpNhoF7I20pzM_9Bs";

export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
