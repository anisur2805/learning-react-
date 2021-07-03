import React, { useState, useEffect } from "react";
import axios from "axios";
const UseEffectFetchSinglePostButton = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButton, setIdFromButton] = useState(1);
  const handleChange = () => {
    setIdFromButton(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then((res) => {
        setPost(res.data);
		console.log(res.data)
      })
      .catch((err) => console.log(err));
  }, [idFromButton]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" className="btn btn-primary" onClick={handleChange}>
        Fetch Data{" "}
      </button>
      <div className="card w-75 my-2">
        <div className="card-body">
          <h5> {post.title}</h5>
          <p>{post.body}</p>
        </div>
      </div>
      <i className="small text-bold">
        You fetch <strong>{id}</strong> no post
      </i>
    </div>
  );
};

export default UseEffectFetchSinglePostButton;
