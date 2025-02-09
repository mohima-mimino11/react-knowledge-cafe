import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa6";
const Blog = ({blog, handleBookmarkButton}) => {
  const {title, cover, author_img, author, posted_date, reading_time, hashtags} = blog;
  
  return (
   
      <div className="space-y-8 mb-20">
        <img className="w-[845px] h-[450px]" src={cover} alt={`cover of the ${title}`} />
      <div className="flex justify-between">
        <div className="flex">
          <img src={author_img} className="w-[60px] h-[60px] rounded-full" />
          <div className="ml-10">
            <h5 className="text-2xl font-bold">{author}</h5>
            <p className="text-base text-gray-500">{posted_date}</p>
          </div>
      </div>
      <div >
          <span className="text-gray-500 text-xl font-medium">{reading_time} min read</span>
          <button className="ml-2 text-red-500" ><FaBookmark onClick={() => handleBookmarkButton(blog)}></FaBookmark></button>
      </div>

      </div>
      <h3 className="text-4xl font-bold">{title}</h3>
      <p className="text-gray-500 text-xl font-medium">{
        hashtags.map((hash, idx) => 
        <span key={idx}>#{hash}</span>)}</p>
      <button className="text-xl text-[#6047EC] font-semibold underline">Mark as read</button>
    </div>
   
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired
}

export default Blog;