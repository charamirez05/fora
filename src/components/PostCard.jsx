import React from 'react'
import { FaMapMarker } from 'react-icons/fa'

const PostCard = ({ post }) => {
    const comments = post.comments;

    return (
        <div
        >
            <div style={{
                padding: "15px",
                borderTop: "1px solid #E2725B",
                borderBottom: "1px solid #E2725B",
                
            }}>

                <div
                    style={{  marginBottom: "5px",  fontSize: "10px" }}
                >{post.date}</div>
                <div
                    style={{marginBottom: "5px",  fontSize: "10px" }}
                >{post.author}</div>
                <h3
                    style={{ color: "#3F826D", fontWeight: "bolder", fontSize: "15px" }}
                >{post.title}</h3>
                <div
                    style={{  marginTop: "5px",  fontSize: "10px" }}

                >comments: {post.comments.length}
                </div>
            </div>

        </div>



        /*  {/* link ni later  
         
         <Link
                 to={`/jobs/${job.id}`}
                 className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
             >
                 Read More
             </Link>
             
             <h1> View full discussion/thread
             ang whole object/component ika click kay mo redirect nalang hueheu </h1>
*/
    )
}

export default PostCard