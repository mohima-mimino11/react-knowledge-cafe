import React from 'react'
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
  return (
    <div className="md:w-1/3 bg-[#0D111111] ml-6 rounded-lg">
      <h3 className="text-2xl font-bold text-center">Bookmarked Blogs: {bookmarks.length} </h3>
      {
        bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
      }
    </div>
  );
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired
}

export default Bookmarks
