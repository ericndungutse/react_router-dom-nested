import {useNavigate } from "react-router-dom";

const PostItem = ({ post }) => {
  let navigate = useNavigate();

  return (
    <div className="post" onClick={()=> navigate(`/posts/${post.id}`)}>
      <div className="post-title">
        <h2>{post.title}</h2>
      </div>
      <div className="post-text">
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default PostItem;
