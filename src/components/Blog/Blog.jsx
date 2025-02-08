import PropTypes from "prop-types";
const Blog = ({blog}) => {
  const {title, cover, author_img, author, posted_date, reading_time, hashtags} = blog;
  
  return (
    <div className="space-y-10">
      <div className="space-y-8 pl-[320px]">
        <img className="w-[845px] h-[450px]" src={cover} alt={`cover of the ${title}`} />
      <div className="flex justify-between">
        <div className="flex">
          <img src={author_img} className="w-[60px] h-[60px] rounded-full" />
          <div className="ml-10">
            <h5 className="text-2xl font-bold">{author}</h5>
            <p className="text-base text-gray-500">{posted_date}</p>
          </div>
      </div>
      <div>
          <p className="text-gray-500 text-xl font-medium">{reading_time} min read</p>
      </div>

      </div>
      <h3 className="text-4xl font-bold">{title}</h3>
      <p className="text-gray-500 text-xl font-medium">{
        hashtags.map(hash => 
        <span>#{hash}</span>)}</p>
      <button className="text-xl text-[#6047EC] font-semibold">Mark as read</button>
    </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired
}

export default Blog;