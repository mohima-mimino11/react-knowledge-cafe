import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleBookmarkButton = (blog) =>{
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
    
  }
  const handleMarkAsReadButton = (time, id) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove the read blog from bookmark
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
    
    
  }


  return (
    <div>
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto  mt-8'>
       <Blogs handleBookmarkButton={handleBookmarkButton} handleMarkAsReadButton={handleMarkAsReadButton}></Blogs>
       <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
    </div>
  )
}

export default App
