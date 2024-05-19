import React, { useEffect, useState } from "react";
import ForumCard from "./ForumCard";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Button, Stack, Tab, Typography } from "@mui/material";
import { useForum } from "../contexts/ForumContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ForumsListing = ({ forums, topic }) => {

  return (
    <Box
      sx={{ backgroundColor: "rgba(209, 250, 229, 0.3)", paddingTop: "100px" }}
    >
      <Box
        sx={{
          backgroundColor: "white", // bg-white
          padding: "30px", // px-6 (6 * 4px = 24px)
          margin: "20px", // m-4 (4 * 4px = 16px)
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md
          borderRadius: "10px", // rounded-md (8px border radius)
        }}
      >
        <Box style={{ display: "flex" }}>
          <Link
            to={"/"}
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <ArrowBackIcon className="mr-2" style={{ color: "#E2725B" }} />
            <Typography
              variant="h6"
              style={{
                color: "#3F826D",
                fontWeight: "bold",
              }}
            >
              {topic} Forums
            </Typography>
          </Link>
        </Box>

        <Box sx={{ margin: "10px" }}>
          {forums && forums.map((forum) => (
            <ForumCard key={forum.id} forum={forum} topic={topic}/>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ForumsListing;
