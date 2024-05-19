import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaMapMarker, FaStar } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForum } from "../contexts/ForumContext";
import ForumCommentCard from "../components/ForumCommentCard";
import { toast } from "react-toastify";
import CommentModal from "../components/CommentModal";

const ForumPage = () => {
  const { forum, getForumByID, updateForumStar, removeForum } = useForum();

  const { id } = useParams();

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const rateForum = () => {
    const updatedForum = {
      author: forum.author,
      title: forum.title,
      content: forum.content,
      date: forum.date,
      comments: forum.comments,
      stars: forum.stars + 1,
      topic: forum.topic,
    };

    updateForumStar(updatedForum, id);

    toast.success("Forum rated successfully!");
  };

  const deleteForum = () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this forum?"
    );

    if (!confirm) return;

    removeForum(id);

    toast.success("Forum deleted successfully!");

    navigate(`/viewForums/${forum.topic}`);
  };

  const addComment = () => {
    navigate(`/addComment/${id}`);
  };

  useEffect(() => {
    getForumByID(id);
  }, [rateForum]);

  return (
    <div
      style={{
        backgroundColor: "rgba(209, 250, 229, 0.3)", // bg-green-50
      }}
    >
      <div className="container m-auto py-6 px-6">
        <Link
          to={`/viewForums/${forum.topic}`}
          className="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
          <FaArrowLeft className="mr-2" style={{ color: "#E2725B" }} />
          <h1 style={{ color: "#3F826D", fontWeight: "bold" }}>
            {" "}
            Back to Forum Listings
          </h1>
        </Link>
      </div>

      <div className="container m-auto ">
        <div
          className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
          style={{ position: "relative", paddingBottom: "50px" }}
        >
          <div className="text-gray-500 mb-4">{forum.date}</div>
          <h1 style={{ color: "#3F826D" }} className="text-3xl font-bold mb-4">
            {forum.title}
          </h1>
          <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
            <p style={{ color: "#E2725B" }}>by {forum.author}</p>
          </div>

          <div
            style={{ borderBottom: "2px solid #E2725B" }}
            className="bg-white p-6 rounded-lg shadow-md mt-6"
          >
            <p className="mb-4">{forum.content}</p>
          </div>
          <div
            style={{
              display: "flex",
              position: "absolute",
              bottom: 0,
              left: 50,
            }}
          >
            <p
              className="mb-4"
              style={{ fontWeight: "bold", color: "#E2725B", fontSize: "20px" }}
            >
              {forum.stars} Stars
            </p>
          </div>
          <div
            style={{
              display: "flex",
              position: "absolute",
              bottom: -3,
              right: 50,
            }}
          >
            <button
              className="mb-4"
              style={{
                paddingRight: "30px",
                fontWeight: "bold",
                fontSize: "20px",
                color: "#E2725B",
              }}
              onClick={rateForum}
            >
              Rate
            </button>

            <button
              className="mb-4"
              style={{
                paddingRight: "30px",
                fontWeight: "bold",
                fontSize: "20px",
                color: "#E2725B",
              }}
              onClick={openModal}
            >
              Add a Comment
            </button>
            {isModalOpen && (
              <CommentModal closeModal={closeModal} forum={forum} />
            )}

            <button
              className="mb-4"
              style={{
                paddingRight: "30px",
                fontWeight: "bold",
                fontSize: "20px",
                color: "#E2725B",
              }}
              onClick={deleteForum}
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "30px",
        }}
      >
        <h1
          style={{
            paddingLeft: "115px",
            fontSize: "25px",
            fontWeight: "bold",
            color: "#3F826D",
          }}
        >
          {" "}
          Comments{" "}
        </h1>
        {forum && forum.comments && forum.comments.length !== 0 ? (
          forum.comments.map((comment) => (
            <ForumCommentCard key={comment.id} comment={comment} />
          ))
        ) : (
          <div
            className="p-6 rounded-lg shadow-md text-center md:text-left"
            style={{
              position: "relative",
              paddingBottom: "50px",
              paddingLeft: "100px",
              backgroundColor: "rgba(209, 250, 229, 0.3)",
            }}
          >
            <h1 style={{ fontSize: "20px" }}> No Comments Yet. </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForumPage;
