import React, { useState, useEffect } from "react";
import axios from "axios";
const FetchUseEffect = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <div className="card w-75 my-2">
                <div className="card-body">
                  {post.title}
                  {post.body}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchUseEffect;
