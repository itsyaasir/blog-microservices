import axios from "axios";
import { React, useState } from "react";

const CreateComment = ({ postId }) => {
  const [content, setContent] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    setContent("");
    // window.location.reload();
  };
  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <div className='form-group'>
          <label htmlFor=''>New Comment</label>
          <input
            type='text'
            className='form-control'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ marginBottom: "12px" }}
          />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
};

export default CreateComment;
