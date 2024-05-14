import React, { useEffect, useState } from 'react'
import ForumCard from './ForumCard'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';


const ForumsListing = ({ isHome = false, forum, forumTopic = "" }) => {


    const navigate = useNavigate();


    const onViewForum = (forumTopic) => {

        navigate(`/viewForums/${forumTopic}`);

    }





    return (

        <div style={{
            backgroundColor: "rgba(209, 250, 229, 0.3)", // bg-green-50

        }}>
            <div className="container m-auto max-w-8xl ">
                <div className=" bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0  ">

                    <div >

                        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>

                            <div
                                style={{ display: "flex", }}
                            >
                                {!isHome ? (
                                    <Link
                                        to={forumTopic === 'All' ? '/' : '/viewForums/All'}
                                        className="text-indigo-500 hover:text-indigo-600 flex items-center"
                                    >
                                        <FaArrowLeft
                                            className='mr-2'
                                            style={{ color: '#E2725B' }} />
                                        <h2
                                            style={{
                                                color: "#3F826D",
                                                fontSize: "20px",
                                                marginLeft: "5px",
                                                fontWeight: "bold",
                                                marginRight: "10px"
                                            }}
                                        >
                                            {forumTopic} Forums

                                        </h2>
                                    </Link>
                                ) : (
                                    <h2
                                        style={{
                                            color: "#3F826D",
                                            fontSize: "20px",
                                            marginLeft: "5px",
                                            fontWeight: "bold",
                                            marginRight: "10px"
                                        }}
                                    >

                                        {forumTopic} Forums
                                    </h2>
                                )}



                                {isHome ? (
                                    <button
                                        style={{
                                            color: "#FFFFFF",
                                            backgroundColor: "#E2725B",
                                            fontWeight: "bold",
                                            padding: "3px",
                                            borderRadius: "10px",
                                            width: "fit-content"

                                        }}
                                        onClick={() => onViewForum(forumTopic)}>


                                        View All
                                    </button>
                                ) : (
                                    <> </>
                                )}

                            </div>


                        </div>


                        <div
                            className="rounded-xl shadow-md relative bg-white p-4 rounded-lg shadow-md md:text-left"


                            style={{
                                backgroundColor: "#FFFFFF",


                                display: "grid", // grid
                                gridTemplateColumns: "1fr", // grid-cols-1
                                gap: "15px" // gap-6
                            }}
                        >
                            {
                                forum.map((post) => (
                                    <ForumCard key={post.id} post={post} isHome={isHome} />
                                ))
                            }
                        </div>



                    </div >
                </div >
            </div>
        </div >




    )
}

export default ForumsListing