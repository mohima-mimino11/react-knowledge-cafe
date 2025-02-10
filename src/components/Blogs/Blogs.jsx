import { useState, useEffect  } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleBookmarkButton, handleMarkAsReadButton}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(()=>{
    fetch('blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  },[])
  return (
    <div className="md:w-2/3">
      {/* <h1 className="text-4xl">Blogs:{blogs.length}</h1> */}
      {
        blogs.map(blog => <Blog 
          key={blog.id} 
        handleBookmarkButton={handleBookmarkButton}
        handleMarkAsReadButton={handleMarkAsReadButton}
          blog={blog}></Blog>)
      }
    </div>
  );
};

Blogs.propTypes = {
  handleBookmarkButton : PropTypes.func.isRequired, 
  handleMarkAsReadButton: PropTypes.func
}
export default Blogs;