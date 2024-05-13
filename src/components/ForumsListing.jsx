import React, { useEffect, useState } from 'react'
import ForumCard from './ForumCard'
import { Link, useNavigate } from 'react-router-dom'


const ForumsListing = ({ isHome = false, forum, forumTopic="" }) => {


    const navigate = useNavigate();


    const onViewForum = (forumTopic) =>{
        
       
        navigate(`/viewForums/${forumTopic}`);

    } 

    
    


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
                            
                             {forumTopic} Forums
                        </h2>

                        {isHome ? (
                        <button
                            style={{
                                color: "#FFFFFF",
                                backgroundColor: "#3F826D",
                                fontWeight: "bold",
                                padding: "5px",
                                borderRadius: "10px",

                            }}
                            onClick={() => onViewForum(forumTopic)}>

                            
                            View All
                        </button>
                        ) : (
                            <> </>
                        )}



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
                            forum.map((post) => (
                                <ForumCard key={post.id} post={post} isHome={isHome} />
                            ))
                        }
                    </div> 



                </div >

            </div >
        </div >
    )
}

export default ForumsListing