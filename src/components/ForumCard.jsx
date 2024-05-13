import React from 'react'
import { FaMapMarker } from 'react-icons/fa'


const ForumCard = ({ post, isHome = false }) => {
    const comments = post.comments;

    return (

        <div>
            <div style={{
                padding: "15px",
                borderTop: "1px solid #E2725B",
                borderBottom: "1px solid #E2725B",

            }}>

                <div style={{ display: 'flex', alignItems: 'center', fontSize: '10px' }}>
                    <p>{post.date}</p>
                    {!isHome && <p style={{ marginLeft: 'auto', paddingLeft: '10px', fontWeight:"bold", color: "#3F826D"}}>{post.topic}</p>}
                </div>




                <div
                    style={{ marginBottom: "5px", fontSize: "10px" }}
                >{post.author}</div>
                <h3
                    style={{ color: "#3F826D", fontWeight: "bolder", fontSize: "15px" }}
                >{post.title}</h3>
                <div
                    style={{ marginTop: "5px", fontSize: "10px" }}

                >comments: {post.comments.length}
                </div>





            </div>





        </div>






    )
}

export default ForumCard