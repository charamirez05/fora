import React, { useEffect, useState } from "react";
import ForumCard from "./ForumCard";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Button, Stack, Tab, Typography } from "@mui/material";
import { useForum } from "../contexts/ForumContext";

const ForumsListing = ({ isHome = false, forumTopic }) => {
  const {
    forums,
    generalForum,
    mathForum,
    popCultureForum,
    fetchForums,
    setForumTopics,
  } = useForum();

  useEffect(() => {
    fetchForums();
    setForumTopics(isHome);
  }, [forums]);
  const navigate = useNavigate();

  const onViewForum = (forumTopic) => {
    navigate(`/viewForums/${forumTopic}`);
  };

  const [value, setValue] = useState("math");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Box sx={{backgroundColor: "rgba(209, 250, 229, 0.3)", paddingTop: "100px"}}
      >
            <div className="container m-auto py-4 max-w-8xl ">
                <div className=" bg-white px-6 py-8 mb-6 shadow-md rounded-md border m-4 md:m-0  ">

                    <div >

                        <div style={{ display: "flex", alignItems: "center", marginBottom: "0px" }}>

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
                                generalForum.map((post) => (
                                    <ForumCard key={post.id} post={post} isHome={isHome} />
                                ))
                            } 
                        </div> 



                    </div >
                </div >
            </div>
     
    </Box>
   
  );
};

export default ForumsListing;
