import React from "react";
import { useSelector } from "react-redux";

import PostItem from "../components/PostItem.component";

const AllPosts = () => {
  const posts = useSelector((state) => state.posts);

  console.log('Allpost')

  const el =
    posts.posts !== null ? (
      <div className="posts">
        {posts.posts.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })}
      </div>
    ) : posts.errMsg ? posts.errMsg : <h3>Unexpected error has happened!</h3>
  return el;
};

export default AllPosts;
