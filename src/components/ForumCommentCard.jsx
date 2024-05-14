import React from 'react'

const ForumCommentCard = ({ comment }) => {
    return (
        <div
            style={{ padding: "20px", paddingTop: "5px", paddingBottom: "5px" }}
            className="container m-auto "
        >
            <div
                className="bg-white p-4 rounded-lg shadow-md text-center md:text-left"
            >
                <div 
                
                className=" text-gray-500">{comment.date.split("T")[0]}</div>
                <div className="bg-white p-6 rounded-lg shadow-md mt-4">

                    <p>
                        {comment.content}
                    </p>
                </div>


            </div>





        </div>
    )
}

export default ForumCommentCard