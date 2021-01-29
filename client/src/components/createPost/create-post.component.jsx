import axios from "axios";
import React, { useState, useEffect } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/posts", { title });
    window.location.reload();
    setTitle("");
  };
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div>
      <h1>Create Post</h1>

      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Title</label>
          <input
            className='form-control'
            style={{ marginBottom: 10 }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
