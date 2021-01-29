import React from "react";

const CommentList = ({ comments }) => {
  console.log(comments);
  return (
    <div>
      {comments.map((comment) => {
        console.log(comment.status);

        return (
          <ul key={comment.id}>
            <li key={comment.id}>{comment.content}</li>
          </ul>
        );
      })}
    </div>
  );
};
export default CommentList;
