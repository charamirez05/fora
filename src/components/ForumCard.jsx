import { Box, Typography } from "@mui/material";
import React from "react";

import { NavLink, useParams } from "react-router-dom";

const ForumCard = ({ forum }) => {
  const {topic} = useParams();

 
  return (
    <Box sx={{ padding: "0px 0px 10px 0" }}>
      <Box
        sx={{
          padding: "15px",
          borderBottom: "2px solid #E2725B",
          borderRadius: "8px", // rounded-lg (lg corresponds to 8px border radius)
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md
        }}
      >
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="subtitle2"
            sx={{ marginBottom: "5px", fontSize: { xs: "10px", md: "15px" } }}
          >
            {forum && typeof forum.date === 'string' ? forum.date.split("T")[0] : ''}
          
          </Typography>

          {topic === "All" ? (
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: { xs: "10px", md: "15px" },
                marginLeft: "auto",
                paddingLeft: "10px",
                fontWeight: "bold",
                color: "#3F826D",
              }}
            >
              {forum.topic.charAt(0).toUpperCase() + forum.topic.slice(1)}
            </Typography>
          ) : (
            <></>
          )}
        </Box>

        <Typography
          variant="subtitle1"
          sx={{
            marginBottom: "5px",
            fontStyle: "italic",
            fontSize: { xs: "15px", md: "20px" },
          }}
        >
          {forum.author}
        </Typography>
        <NavLink to={`/forum/${forum.id}`}>
          <Typography
            variant="h5"
            sx={{
              marginBottom: "5px",
              color: "#3F826D",
              fontSize: { xs: "20px", md: "25px" },
              fontWeight: "bold",
            }}
          >
            {forum.title}
          </Typography>
        </NavLink>

        <Typography
          variant="subtitle2"
          sx={{ fontSize: { xs: "10px", md: "15px" } }}
        >
          comments: {forum.comments.length}
        </Typography>
      </Box>
    </Box>
  );
};

export default ForumCard;
