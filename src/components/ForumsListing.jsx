import React, { useState } from "react";

import ForumCard from "../components/ForumCard";

import { Box, Pagination, Typography } from "@mui/material";

import { ForumLoading } from "../components/ForumLoading";

export const ForumsListing = ({ forums, loading }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedForums = forums && forums.slice(startIndex, endIndex);
  const pageCount = Math.ceil(forums && forums.length / itemsPerPage);

  return (
    <Box
      sx={{
        backgroundColor: "white", // bg-white
        padding: { xs: "5px", md: "20px" },

        margin: { xs: "20px", md: "20px" },
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md
        borderRadius: "10px", // rounded-md (8px border radius)
      }}
    >
      <ForumLoading loading={loading} />

      {forums && !loading &&  forums.length !== 0 ? (
        <Box
          sx={{
            margin: "10px",
            padding: { xs: "5px", md: "0px" }, // px-6 (6 * 4px = 24px)
          }}
        >
          {paginatedForums &&
            paginatedForums.map((forum) => (
              <ForumCard key={forum.id} forum={forum} topic={forum.topic} />
            ))}
          <Box
            display="flex"
            justifyContent="center"
            sx={{ marginTop: { xs: "10px", md: "20px" } }}
          >
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
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            
            padding: "50px ", // px-6 (6 * 4px = 24px)
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "25px", md: "30px" },
              color: "#3F826D",
              fontWeight: "bold",
            }}
          >
            No forums found.
          </Typography>
        </Box>
      )}
    </Box>
  );
};
