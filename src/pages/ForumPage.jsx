import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaMapMarker, FaStar } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { useForum } from '../contexts/ForumContext';
import ForumCommentCard from '../components/ForumCommentCard';
import { toast } from 'react-toastify';



const ForumPage = () => {

  const { forums, forum, generalForum, mathForum, popCultureForum, fetchForums, getForumByID, setForumTopics, createNewForum, updatePostStar } = useForum();

  const { id } = useParams();



  const ratePost = () => {

    const updatedForum = {
      author: forum.author,
      title: forum.title,
      content: forum.content,
      date: forum.date,
      comments: forum.comments,
      stars: forum.stars + 1,
      topic: forum.topic
    }


    updatePostStar(updatedForum, id);

    toast.success("Forum rated successfully!");


  }


  useEffect(() => {
    getForumByID(id);
    console.log(forum.comments)
  }, [ratePost]);





  return (

    <div style={{
      backgroundColor: "rgba(209, 250, 229, 0.3)", // bg-green-50

    }}
    >
      <div className="container m-auto py-6 px-6">
        <Link
          to={`/viewForums/${forum.topic}`}
          className="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
          <FaArrowLeft className='mr-2' style={{ color: "#3F826D" }} />
          <h1 style={{ color: "#3F826D", fontWeight: "bold" }} > Back to Forum Listings</h1>
        </Link>
      </div>


      <div className="container m-auto "
      >
        <div
          className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
          style={{ position: "relative", paddingBottom: "50px" }}
        >
          <div className="text-gray-500 mb-4">{forum.date}</div>
          <h1
            style={{ color: "#3F826D" }}
            className="text-3xl font-bold mb-4">
            {forum.title}
          </h1>
          <div
            className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
          >

            <p
              style={{ color: "#E2725B" }}
            >
              by {forum.author}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mt-6">

            <p className="mb-4">
              {forum.content}
            </p>

          </div>
          <div style={{ display: "flex", position: 'absolute', bottom: 0, left: 50 }}>

            <p className="mb-4" style={{ fontWeight: "bold" }}>{forum.stars} Stars</p>
          </div>
          <div style={{ display: "flex", position: 'absolute', bottom: -3, right: 50 }}>

            <button
              className="mb-4"
              style={{

                paddingRight: "30px",
                fontWeight: "bold",
                fontSize: "20px",
                color: "#E2725B"
              }}
              onClick={ratePost}
            >
              Rate
            </button>

            <button
              className="mb-4"
              style={{

                paddingRight: "30px",
                fontWeight: "bold",
                fontSize: "20px",
                color: "#E2725B"
              }}>
              Add a Comment
            </button>
            <button className="mb-4"
              style={{

                paddingRight: "30px",
                fontWeight: "bold",
                fontSize: "20px",
                color: "#E2725B"
              }}>
              Delete
            </button>
          </div>







        </div>
      </div>



      <div

      >
        {forum.comments.length !== 0 ? (
          forum.comments.map((comment) => (

            <ForumCommentCard comment={comment} />
          ))
        ) : (
          <div
          className="p-6 rounded-lg shadow-md text-center md:text-left"
          style={{ position: "relative", paddingBottom: "50px", paddingLeft: "100px" }}
        >
            <h1 style={{fontSize: "20px"}}> No Comments Yet. </h1>
          </div>

        )
        }
      </div>




    </div >
  )
}

export default ForumPage