import { Box, Typography } from "@mui/material";
import React from "react";
import { FaMapMarker } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ForumCard = ({ forum, topic }) => {
  return (
    <Box sx={{ paddingBottom: "10px" }}>
      <Box
        className="bg-white p-4 rounded-lg shadow-md  md:text-left"
        sx={{
          padding: "15px",
          borderBottom: "2px solid #E2725B",
          borderRadius: "8px", // rounded-lg (lg corresponds to 8px border radius)
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md
        }}
      >
        <Box
          style={{ display: "flex", alignItems: "center", fontSize: "10px" }}
        >
          <Typography variant="subtitle2" sx={{ marginBottom: "5px" }}>
            {forum.date}
          </Typography>

          {topic === "All" ? (
            <Typography
              variant="subtitle2"
              sx={{
                marginLeft: "auto",
                paddingLeft: "10px",
                fontWeight: "bold",
                color: "#3F826D",
              }}
            >
              {forum.topic}
            </Typography>
          ) : (
            <></>
          )}
        </Box>

        <Typography variant="subtitle1" sx={{ marginBottom: "5px", fontStyle: 'italic' }}>
          {forum.author}
        </Typography>
        <NavLink to={`/viewForum/${forum.id}`}>
          <Typography
            variant="h5"
            sx={{ marginBottom: "5px", color: "#3F826D", fontWeight: "bold" }}
          >
            {forum.title}
          </Typography>
        </NavLink>

        <Typography variant="subtitle2" >
          comments: {forum.comments.length}
        </Typography>
      </Box>
    </Box>
  );
};

export default ForumCard;
