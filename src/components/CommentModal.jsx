import React, { useState } from 'react'

import { toast } from 'react-toastify';
import { useForum } from '../contexts/ForumContext';

const CommentModal = ({ closeModal, forum }) => {




    const { addComment } = useForum();



    const [author, setAuthor] = useState('');
    const [comment, setComment] = useState('');



    const submitForm = (e) => {
        e.preventDefault();


        const newComment = {
            id: Math.random(),
            author,
            content: comment,
            date: new Date(),
        }

        forum.comments.push(newComment);

        addComment(forum, forum.id)

        toast.success("Commented successfully!");


    }


    return (

        <div style={{ backgroundColor: "rgba(209, 250, 229, 0.3)", }} // bg-green-50
        >
            <div
                style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <div className="container m-auto max-w-2xl py-24">
                    <div
                        className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
                    >
                        <form onSubmit={submitForm}>
                            <h2
                                style={{ color: "#3F826D" }}
                                className="text-3xl text-center font-semibold mb-6">Add Comment</h2>


                            <div className="mb-4">
                                <label
                                    style={{ color: "#3F826D" }}
                                    className="block text-gray-700 font-bold mb-2"
                                >Author</label
                                >
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="border rounded w-full py-2 px-3 mb-2"

                                    required
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    style={{ color: "#3F826D" }}
                                    htmlFor="content"
                                    className="block text-gray-700 font-bold mb-2"
                                >Comment</label
                                >
                                <textarea
                                    id="content"
                                    name="content"
                                    className="border rounded w-full py-2 px-3"
                                    rows="4"
                                    placeholder="Add discussion content of chosen topic/title"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                ></textarea>
                            </div>

                            <div>
                                <button
                                    style={{
                                        backgroundColor: "#3F826D",
                                        color: "white", // text-white
                                        fontWeight: "bold", // font-bold
                                        padding: "0.5rem 1rem", // py-2 px-4
                                        borderRadius: "9999px", // rounded-full
                                        width: "100%", // w-full
                                        outline: "none", // focus:outline-none
                                        boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.5)", // focus:shadow-outline
                                    }}

                                    type="submit"

                                >
                                    Create New Forum
                                </button>
                            </div>
                        </form>

                        <button
                            style={{
                                marginTop: '10px',
                                backgroundColor: "#3F826D",
                                color: "white", // text-white
                                fontWeight: "bold", // font-bold
                                padding: "0.5rem 1rem", // py-2 px-4
                                borderRadius: "9999px", // rounded-full
                                width: "100%", // w-full
                                outline: "none", // focus:outline-none
                                boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.5)", // focus:shadow-outline
                            }} onClick={closeModal}> Done </button>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default CommentModal