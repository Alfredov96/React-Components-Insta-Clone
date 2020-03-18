//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data"
// import data 

const PostsPage = () => {
const [data, setData] = useState(dummyData)

  
  return (
    <div className="posts-container-wrapper">
      {data.map((item, index) => {
        return <Post post = {item} key ={index}/>
      })}
    </div>
  );
};

export default PostsPage;

