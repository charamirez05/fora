import React, { useEffect } from 'react'
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { useForum } from '../contexts/ForumContext';
import ForumCommentCard from '../components/ForumCommentCard';


const ForumPage = () => {

  const { forums, forum, generalForum, mathForum, popCultureForum, fetchForums, getForumByID, setForumTopics, createNewForum } = useForum();

  const { id } = useParams();



  useEffect(() => {
    getForumByID(id);

  }, []);


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
          <FaArrowLeft className='mr-2' /> Back to forum Listings
        </Link>
      </div>


      <div className="container m-auto "
      >
        <div
          className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
          style={{ position: "relative", paddingBottom: "50px" }}
        >
          <div className="text-gray-500 mb-4">{forum.date.split("T")[0]}</div>
          <h1 
          style={{color:"#3F826D"}}
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

            <p className="mb-4">{forum.stars} Stars</p>
          </div>
          <div style={{ display: "flex", position: 'absolute', bottom: -2, right: 50 }}>

            <p
              className="mb-4"
              style={{

                paddingRight: "30px",
                fontWeight: "bold",
                fontSize: "20px",
                color: "#E2725B"
              }}>
              Add a Comment
            </p>
            <p className="mb-4"
              style={{

                paddingRight: "30px",
                fontWeight: "bold",
                fontSize: "20px",
                color: "#E2725B"
              }}>
              Delete
            </p>
          </div>







        </div>
      </div>



      <div

      >
        {
          forum.comments.map((comment) => (

            <ForumCommentCard comment={comment} />
          ))
        }
      </div>




    </div >
  )
}

export default ForumPage