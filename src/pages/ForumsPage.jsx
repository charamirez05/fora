import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ForumCard from "../components/ForumCard";
import { Link, useNavigate } from "react-router-dom";
import useForums from "../services/useForums";
import { Box, Pagination, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ForumLoading } from "../components/ForumLoading";
import { ForumsListing } from "../components/ForumsListing";

const ForumsPage = () => {
  const { topic } = useParams();

  const { data, isLoading } = useForums(topic);

  return (
    <Box
      sx={{
        backgroundColor: "rgba(209, 250, 229, 0.3)",
        padding: { xs: "100px 0px 100% 0px", md: "100px 25px 100% 25px" },
      }}
    >
      <Box sx={{ display: "flex", paddingLeft: { xs: "20px", md: "25px" } }}>
        <Link
          to={"/"}
          className="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
          <ArrowBackIcon className="mr-2" style={{ color: "#E2725B" }} />
        </Link>
        <Typography
          variant="h6"
          sx={{
            color: "#3F826D",
            fontWeight: "bold",
            fontSize: { xs: "20px", md: "30px" },
          }}
        >
          {topic.charAt(0).toUpperCase() + topic.slice(1)} Forums
        </Typography>
      </Box>
      <ForumsListing forums={data} loading={isLoading} />
    </Box>
  );
};

export default ForumsPage;
