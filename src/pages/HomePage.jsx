import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PostListings from '../components/PostListings'

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <PostListings />
        </>
    )
}

export default HomePage