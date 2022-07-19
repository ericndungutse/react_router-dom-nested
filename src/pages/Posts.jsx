import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

const Posts = () => {
  const isLoading = useSelector((state) => state.posts.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetcPosts = async () => {
      try {
        const res = await axios("https://jsonplaceholder.typicode.com/posts");
      dispatch({ type: "POSTS_LOADED", payload: res.data });
      } catch (error) {
        dispatch({type: "ERROR", payload: error.message})
      }
      
    };

    fetcPosts();
  },[dispatch]);

  if (isLoading){
    return <img src="/spinner.gif" className="spinner" alt="spinner" />;
  }
  else 
    return <Outlet />;
};

export default Posts;
