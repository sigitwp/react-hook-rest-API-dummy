import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [post, setPost] = useState({});
  const [postId, setPostId] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setIsFetching(true);
      console.log("postId: ", postId);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      console.log("res: ", res);
      const post = await res.json();
      console.log("post: ", post);
      setPost(post);
      setIsFetching(false);
    };
    fetchPost();
  }, [postId]);

  return (
    <div className="container">
      <h1>React Hook - Dummy Online Rest API</h1>
      <Button className="btn btn-primary btn-box" onClick={e => setPostId(postId + 1)}>Next Post</Button>
      {isFetching && <h1>Loading...</h1>}
      {!isFetching && (
        <div className="card">
          <div className="card-header">
            <p>Post ID: {postId}</p>
          </div>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
