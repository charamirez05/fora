import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PostCard from './components/PostCard'
import PostListings from './components/PostListings'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PostListings/>
    </>
  )
}

export default App