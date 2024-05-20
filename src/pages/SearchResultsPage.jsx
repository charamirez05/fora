import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ForumCard from "../components/ForumCard";
import { Link, useNavigate } from "react-router-dom";

import useForums from "../services/useForums";

import { Box, Pagination, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ForumLoading } from "../components/ForumLoading";
import { useQuery } from "@tanstack/react-query";
import { getAllForumsByTitle, getAllForumsByTopic } from "../services/forums";
import { ForumsListing } from "../components/ForumsListing";

export const SearchResultsPage = () => {
  const { title } = useParams();

  const forumQuery = useQuery({
    queryKey: ["forums", title],
    queryFn: () => getAllForumsByTitle(title),
  });

  return (
    <Box
      sx={{
        backgroundColor: "rgba(209, 250, 229, 0.3)",
        padding: { xs: "100px 0px 100% 0px", md: "100px 25px 100% 25px" },
      }}
    >
      <Box sx={{ display: "flex", paddingLeft: { xs: "20px", md: "25px" } }}>
        <Stack direction="row">
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
              fontSize: { xs: "15px", md: "25px" },
            }}
          >
            Search results for
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#3F826D",
              fontWeight: "bold",
              fontSize: { xs: "15px", md: "25px" },
              fontStyle: "italic",
              marginLeft: "5px",
            }}
          >
            {title}
          </Typography>
        </Stack>
      </Box>
      <ForumsListing forums={forumQuery.data} loading={forumQuery.isLoading} />
    </Box>
  );
};
