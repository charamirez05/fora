import React, { useEffect, useState } from 'react'
import ForumsListing from '../components/ForumsListing'
import { useForum } from '../contexts/ForumContext'
import { useParams } from 'react-router-dom';

const ForumsPage = () => {


  const { forumTopic } = useParams();

  const { forums, generalForum, mathForum, popCultureForum, fetchForums, setForumTopics } = useForum();


  const [forumObject, setForumObject] = useState([]);



  const formToUseFunction = () => {
    console.log(forumTopic);

    let newForumObject;

    if (forumTopic === 'All') {
      newForumObject = forums;
    } else if (forumTopic === 'General') {
      newForumObject = generalForum;
    } else if (forumTopic === 'Math') {
      newForumObject = mathForum;
    } else if (forumTopic === 'PopCulture') {
      newForumObject = popCultureForum;
    }

    setForumObject(newForumObject);
  };

  useEffect(() => {

    fetchForums();
    setForumTopics();


    formToUseFunction();

  }, [forums, forumTopic]);


  return (

    <ForumsListing isHome={false} forum={forumObject} />

  )
}

export default ForumsPage