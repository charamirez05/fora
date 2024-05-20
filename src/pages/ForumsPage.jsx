import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ForumCard from "../components/ForumCard";
import { Link, useNavigate } from "react-router-dom";

import useForums from "../services/useForums";

import { Box, Pagination, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ForumLoading } from "../components/ForumLoading";

const ForumsPage = () => {
  const { topic } = useParams();

  const { data, isLoading } = useForums(topic);

  const [page, setPage] = useState(1);
  const itemsPerPage = 4;
  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedForums = data && data.slice(startIndex, endIndex);
  const pageCount = Math.ceil(data && data.length / itemsPerPage);

  return (
    <Box
      sx={{
        backgroundColor: "rgba(209, 250, 229, 0.3)",
        padding: "120px 50px 50px 50px",
      }}
    >
      <Box style={{ display: "flex", paddingLeft: "30px" }}>
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
            {topic.charAt(0).toUpperCase() + topic.slice(1)} Forums
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          backgroundColor: "white", // bg-white
          padding: "30px", // px-6 (6 * 4px = 24px)
          margin: "20px", // m-4 (4 * 4px = 16px)
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md
          borderRadius: "10px", // rounded-md (8px border radius)
        }}
      >
        <ForumLoading loading={isLoading} />

        <Box sx={{ margin: "10px" }}>
          {paginatedForums &&
            paginatedForums.map((forum) => (
              <ForumCard key={forum.id} forum={forum} topic={topic} />
            ))}
          <Box display="flex" justifyContent="center">
            <Pagination
              count={pageCount}
              page={page}
              onChange={handleChange}
              sx={{
                "& .Mui-selected": {
                  color: "white",
                  backgroundColor: "#E2725B",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ForumsPage;
