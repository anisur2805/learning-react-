import React, { useState, useEffect } from "react";
import axios from "axios";
const UseEffectFetchSinglePost = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => { 
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <div className="card w-75 my-2">
        <div className="card-body">
          <h5> {post.title}</h5>
          <p>{post.body}</p>
        </div>
      </div>
		<i className="small text-bold">You fetch <strong>{id}</strong> no post</i> 
    </div>
  );
};

export default UseEffectFetchSinglePost;
