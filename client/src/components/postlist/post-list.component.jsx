import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateComment from "../CreateComment/create-comment.component";
import CommentList from "../commentlist/comment-list.component";
const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const response = await axios.get("http://localhost:4002/post");
    setPosts(response.data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className='card'
        style={{
          width: "30%",
          marginBottom: "20px",
        }}
        key={post.id}
      >
        <div className='card-body'>
          <h3>{post.title}</h3>
          <CommentList comments={post.comments} key={post.id} />
          <CreateComment postId={post.id} />
        </div>
      </div>
    );
  });
  return (
    <div className='flex-row flex-wrap d-flex justify-content-between'>
      {renderedPosts}
    </div>
  );
};

export default PostList;
