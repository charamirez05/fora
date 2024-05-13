import React, { useEffect, useState } from 'react'
import ForumsListing from '../components/ForumsListing'
import { useForum } from '../contexts/ForumContext'
import { useParams } from 'react-router-dom';

const ForumsPage = () => {


  const { forumTopic } = useParams();

  const { forums, generalForum, mathForum, popCultureForum, fetchForums, setForumTopics } = useForum();


  const [forumObject, setForumObject] = useState([]);



  const formToUseFunction = () => {
    
    let newForumObject;

    if (forumTopic === 'All' || forumTopic === 'all' ) {
      newForumObject = forums;
    } else if (forumTopic === 'General' || forumTopic === 'general') {
      newForumObject = generalForum;
    } else if (forumTopic === 'Math' || forumTopic === 'math') {
      newForumObject = mathForum;
    } else if (forumTopic === 'PopCulture' || forumTopic === 'popculture') {
      newForumObject = popCultureForum;
    }

    setForumObject(newForumObject);
  };

  useEffect(() => {

    fetchForums();
    setForumTopics();


    formToUseFunction();

  }, [forums, ]);


  return (

    <ForumsListing isHome={false} forum={forumObject} forumTopic={forumTopic} />

  )
}

export default ForumsPage