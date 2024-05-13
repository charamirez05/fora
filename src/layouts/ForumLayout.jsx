import React, { useEffect, useState } from 'react'
import ForumsListing from '../components/ForumsListing';
import { useForum } from '../contexts/ForumContext';


const ForumLayout = (isHome = false) => {


  const { forums, generalForum, mathForum, popCultureForum, fetchForums, setForumTopics  } = useForum();


  

  useEffect(() => {

    fetchForums();
    setForumTopics(isHome);
    
  }, [forums]);



  return (
    <>
      <ForumsListing isHome={isHome} forum={generalForum} forumTopic={"General"} />
      <ForumsListing isHome={isHome} forum={mathForum} forumTopic={"Math"} />
      <ForumsListing isHome={isHome} forum={popCultureForum} forumTopic={"PopCulture"} />

    </>
  )
}

export default ForumLayout