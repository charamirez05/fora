import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import { useForum } from '../contexts/ForumContext'

const PostListings = () => {

    const {forums, generalForum, mathForum, popCultureForum, fetchForums, setForumTopics} = useForum();
    

    useEffect(() => {

        fetchForums();
        setForumTopics();

      
    
    }, [forums]);


    return (
        <div className=" px-4 py-10">
            <div className="container-xl lg:container m-auto">

                <div >

                    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                        <h2
                            style={{
                                color: "#3F826D",
                                fontSize: "20px",
                                marginLeft: "5px",
                                fontWeight: "bold",
                                marginRight: "10px"
                            }}
                        >
                            General Forum
                        </h2>

                        <button
                            style={{
                                color: "#FFFFFF",
                                backgroundColor: "#3F826D",
                                fontWeight: "bold",
                                padding: "5px",
                                borderRadius: "10px",

                            }}>
                            View All
                        </button>


                    </div>


                    <div
                        className="rounded-xl shadow-md relative"
                        style={{
                            backgroundColor: "#FFFFFF",
                            borderColor: "#E2725B",
                            borderWidth: "5px",
                            display: "grid", // grid
                            gridTemplateColumns: "1fr", // grid-cols-1
                            gap: "15px" // gap-6
                        }}
                    >
                        {
                            generalForum.map((post) => (
                                <PostCard key={post.id} post={post} />
                            ))
                        }
                    </div>



                </div >

                 <div >

                    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px", marginTop: "30px" }}>


                        <h2 style={{
                            color: "#3F826D",
                            fontSize: "20px",
                            marginLeft: "5px",
                            fontWeight: "bold",
                            marginRight: "10px"
                        }}> Math Forum
                        </h2>
                        <button
                            style={{
                                color: "#FFFFFF",
                                backgroundColor: "#3F826D",
                                fontWeight: "bold",
                                padding: "5px",
                                borderRadius: "10px",

                            }}>
                            View All
                        </button>

                    </div>


                    <div
                        className="rounded-xl shadow-md relative"
                        style={{
                            backgroundColor: "#FFFFFF",
                            borderColor: "#E2725B",
                            borderWidth: "5px",
                            display: "grid", // grid
                            gridTemplateColumns: "1fr", // grid-cols-1
                            gap: "15px" // gap-6
                        }}
                    >
                        {
                            mathForum.map((post) => (
                                <PostCard key={post.id} post={post} />
                            ))
                        }
                    </div>


                </div >


                <div>


                    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px", marginTop: "30px" }}>


                        <h2 style={{
                            color: "#3F826D",
                            fontSize: "20px",
                            marginLeft: "5px",
                            fontWeight: "bold",
                            marginRight: "10px"
                        }}>
                             Pop Culture Forum
                        </h2>

                        <button
                            style={{
                                color: "#FFFFFF",
                                backgroundColor: "#3F826D",
                                fontWeight: "bold",
                                padding: "5px",
                                borderRadius: "10px",

                            }}>
                            View All
                        </button>
                    </div>

                    <div
                        className="rounded-xl shadow-md relative"
                        style={{
                            backgroundColor: "#FFFFFF",
                            borderColor: "#E2725B",
                            borderWidth: "5px",
                            display: "grid", // grid
                            gridTemplateColumns: "1fr", // grid-cols-1
                            gap: "15px" // gap-6
                        }}
                    >
                        {
                            popCultureForum.map((post) => (
                                <PostCard key={post.id} post={post} />
                            ))
                        }
                    </div>

                </div>



            </div >
        </div >
    )
}

export default PostListings