import React from 'react'

const Hero = () => {

    const buttonClick = (e) => {
        e.preventDefault();

        console.log("ho?");
    }
    return (
        <div style={{
            display: "block",
            paddingTop: "30px",
        
        }}
            className=" lg:container m-auto px-4" >

            <div
                style={{ display: "flex", marginBottom: "20px"}}
            >
                <button
                    style={{
                        color: "#FFFFFF",
                        backgroundColor: "#3F826D",
                        fontWeight: "bold",
                        padding: "10px",
                        borderRadius: "10px",
                        display: "block"
                    }}>
                    + Add Post
                </button>

                <button
                    style={{
                        color: "#FFFFFF",
                        backgroundColor: "#3F826D",
                        fontWeight: "bold",
                        padding: "10px",
                        borderRadius: "10px",
                        display: "block",
                        marginLeft: "20px"
                    }}>
                    View All Forums
                </button>

                <form onSubmit={buttonClick}
                    style={{
                        position: "relative",
                        right: -1000,
                        

                    }}>
                    <input type="text" name="" id="" placeholder="Search post (author, title)" 
                    style={{  width: '200px', border: "3px solid #3F826D",
                    fontWeight: "bold",
                    padding: "5px"
                    }} />
                    <button type="submit" style={{ 
                       color: "#FFFFFF",
                       backgroundColor: "#3F826D",
                       fontWeight: "bold",
                        borderColor: "#E2725B", 
                        width: "fit-content", 
                        padding: "6px" }}> Search </button>
                </form>

            </div>



        </div>
    )
}

export default Hero