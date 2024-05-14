import React from 'react'
import { FaMapMarker } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';


const ForumCard = ({ post, isHome = false }) => {

    return (


      

            <div
            
            >
                <div
                    className="bg-white p-4 rounded-lg shadow-md  md:text-left"

                    style={{
                        padding: "15px",
                        borderBottom: "2px solid #E2725B",
                    }}>

                    <div style={{ display: 'flex', alignItems: 'center', fontSize: '10px' }}>
                        <p>{post.date}</p>
                        {!isHome && <p style={{ marginLeft: 'auto', paddingLeft: '10px', fontWeight: "bold", color: "#3F826D" }}>{post.topic}</p>}
                    </div>




                    <div
                        style={{ marginBottom: "5px", fontSize: "10px" }}
                    >{post.author}</div>
                    <NavLink
                        to={`/viewForum/${post.id}`}
                    >
                        <h3
                            style={{ color: "#3F826D", fontWeight: "bolder", fontSize: "15px" }}
                        >{post.title}</h3>
                    </NavLink>

                    <div
                        style={{ marginTop: "5px", fontSize: "10px" }}

                    >comments: {post.comments.length}
                    </div>





                </div>



            </div>

    






    )
}

export default ForumCard