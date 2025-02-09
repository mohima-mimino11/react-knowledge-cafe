import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmarkButton = (blog) =>{
    console.log('bookmark button clicked');
    
  }

  return (
    <div>
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto  mt-8'>
       <Blogs handleBookmarkButton={handleBookmarkButton}></Blogs>
       <Bookmarks></Bookmarks>
     </div>
    </div>
  )
}

export default App
