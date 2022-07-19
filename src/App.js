import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header.component";
import Footer from "./components/Footer.component";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import AllPosts from "./pages/AllPosts";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/posts" element={<Posts />}>
          <Route path="all_posts" element={<AllPosts />} />
          <Route path=":postId" element={<Post />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
