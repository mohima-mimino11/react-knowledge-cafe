import React from 'react'
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <>
      
      <div className="md:w-1/3 bg-[#0D111111] ml-6 rounded-lg">
        <div className='bg-[#6047EC1A] mb-6'>
          <h4 className="text-2xl font-bold text-[#6047EC] px-12 py-5">Spend Time on reading: {readingTime }</h4>
        </div>
        <h3 className="text-2xl font-bold text-center">Bookmarked Blogs: {bookmarks.length} </h3>
        {
          bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
        }
      </div>
</>
  );
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number
}

export default Bookmarks
