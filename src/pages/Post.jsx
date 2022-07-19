import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Post = () => {
  const { postId } = useParams();
  const post = useSelector(({ posts: { posts } }) => {
    return posts.find((post) => +post.id === +postId);
  });

  return (
    <>
      <h2 className="single_post-title">{post.title}</h2>
      <div className="post single_post">
        <p>{post.body}</p>
      </div>
    </>
  );
};

export default Post;
