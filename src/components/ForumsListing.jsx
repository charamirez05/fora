import React, { useEffect, useState } from "react";
import ForumCard from "./ForumCard";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Button,
  Pagination,
  Stack,
  Tab,
  TablePagination,
  Typography,
} from "@mui/material";
import { useForum } from "../contexts/ForumContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ForumsListing = ({ forums, topic }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;
  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedForums = forums && forums.slice(startIndex, endIndex);

  return (
    <Box
      sx={{ backgroundColor: "rgba(209, 250, 229, 0.3)", padding: "120px 50px 50px 50px" }}
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
            {topic} Forums
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
        <Box sx={{ margin: "10px" }}>
          {paginatedForums &&
            paginatedForums.map((forum) => (
              <ForumCard key={forum.id} forum={forum} topic={topic} />
            ))}
          <Box display="flex" justifyContent="center">
            <Pagination
              count={Math.ceil(forums && forums.length / itemsPerPage)}
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

export default ForumsListing;
