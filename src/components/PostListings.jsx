import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import posts from '../posts.json'
import forums from '../forums.json'

const PostListings = () => {

    const [generalTopic, setGeneralTopic] = useState([]);
    const [mathTopic, setMathTopic] = useState([]);
    const [popCultureTopic, setPopCultureTopic] = useState([]);


    const sortForums = () => {
        let generalTopicArray = [];
        let mathTopicArray = [];
        let popCultureTopicArray = []

        forums.forEach(forum => {
            console.log(forum.topic)
            if (forum.topic === "general")
                generalTopicArray = [...generalTopicArray, forum];
            else if (forum.topic === "math")
                mathTopicArray = [...mathTopicArray, forum];
            else if (forum.topic === "popculture")
                popCultureTopicArray = [...popCultureTopicArray, forum];

        });

        setGeneralTopic(generalTopicArray);
        setMathTopic(mathTopicArray);
        setPopCultureTopic(popCultureTopicArray);
        console.log(generalTopic);
    }

    useEffect(() => {
        sortForums();
    }, [])





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
                            generalTopic.map((post) => (
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
                        }}>{/*  {isHome ? 'Recent Jobs' : 'Browse Jobs'} */} Math Forum
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
                            mathTopic.map((post) => (
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
                            {/*  {isHome ? 'Recent Jobs' : 'Browse Jobs'} */} Pop Culture Forum
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
                            popCultureTopic.map((post) => (
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