import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Hero = () => {

    const buttonClick = (e) => {
        e.preventDefault();


    }

    const navigate = useNavigate();

    const onViewForum = (forumTopic) => {

        navigate(`/viewForums/${forumTopic}`);

    }
    return (

      
            <div style={{
                display: "block",
                padding: "50px",
                backgroundColor: "rgba(209, 250, 229, 0.3)", // bg-green-50
                paddingLeft: "100px"
            }}
                >

                <div
                    style={{ display: "flex", }}
                >
                    <NavLink
                        style={{
                            color: "#FFFFFF",
                            backgroundColor: "#E2725B",
                            fontWeight: "bold",
                            padding: "10px",
                            borderRadius: "10px",
                            display: "block"
                        }}
                        to='/createNewForum'>
                        + Add Post
                    </NavLink>

                    <button
                        style={{
                            color: "#FFFFFF",
                            backgroundColor: "#E2725B",
                            fontWeight: "bold",
                            padding: "10px",
                            borderRadius: "10px",
                            display: "block",
                            marginLeft: "20px"
                        }}
                        onClick={() => onViewForum("All")}
                    >

                        View All Forums
                    </button>

                    <form onSubmit={buttonClick}
                        style={{
                            position: "relative",
                            left: 750,


                        }}>
                        <input type="text" name="" id="" placeholder="Search post (author, title)"
                            style={{
                                width: '200px', 
                                border: "3px solid #E2725B",
                                fontWeight: "bold",
                                padding: "5px"
                            }} />
                        <button type="submit" style={{
                            color: "#FFFFFF",
                            backgroundColor: "#E2725B",
                            fontWeight: "bold",
                            borderColor: "#E2725B",
                            
                            padding: "8px"
                        }}> Search </button>
                    </form>

                </div>



            </div>
        

    )
}

export default Hero