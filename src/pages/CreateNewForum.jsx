import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForum } from '../contexts/ForumContext';

const CreateNewForum = ({ addJobSubmit }) => {

    const navigate = useNavigate();

    const { forums, createNewForum } = useForum();


    const [title, setTitle] = useState('');
    const [topic, setTopic] = useState('general');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');



    const submitForm = (e) => {
        e.preventDefault();

        const newForum = {
            author,
            title,
            content,
            date: new Date(),
            comments: [
                {
                    content: "",
                    date: ""
                }
            ],
            stars: 0,
            topic
        }

        createNewForum(newForum);

        toast.success("Forum created successfully!");

        return navigate('/ViewForums/All');
    }
    return (
        <div style={{ backgroundColor: "rgba(209, 250, 229, 0.3)", }} // bg-green-50
        >
            <div className="container m-auto max-w-2xl py-24">
                <div
                    className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
                >
                    <form onSubmit={submitForm}>
                        <h2
                            style={{ color: "#3F826D" }}
                            className="text-3xl text-center font-semibold mb-6">Add Job</h2>


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
                                htmlFor="type" className="block text-gray-700 font-bold mb-2"
                            >Topic</label
                            >
                            <select
                                id="type"
                                name="type"
                                className="border rounded w-full py-2 px-3"
                                required
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                            >
                                <option value="general">General</option>
                                <option value="math">Math</option>
                                <option value="popculture">Pop Culture</option>

                            </select>
                        </div>



                        <div className="mb-4">
                            <label
                                style={{ color: "#3F826D" }}
                                className="block text-gray-700 font-bold mb-2"
                            >Title</label
                            >
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="border rounded w-full py-2 px-3 mb-2"
                                placeholder="eg. Beautiful Apartment In Miami"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                style={{ color: "#3F826D" }}
                                htmlFor="content"
                                className="block text-gray-700 font-bold mb-2"
                            >Content</label
                            >
                            <textarea
                                id="content"
                                name="content"
                                className="border rounded w-full py-2 px-3"
                                rows="4"
                                placeholder="Add discussion content of chosen topic/title"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
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
                </div>
            </div>
        </div>
    )
}

export default CreateNewForum