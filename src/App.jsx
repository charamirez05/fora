import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PostCard from './components/PostCard'
import PostListings from './components/PostListings'
import { ForumProvider } from './contexts/ForumContext'
import HomePage from './pages/HomePage'


const App = () => {
  return (
    <>
      <ForumProvider>
       <HomePage/>
      </ForumProvider>

    </>
  )
}

export default App