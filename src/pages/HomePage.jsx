import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Button, Stack, Tab, Typography } from "@mui/material";
import { useForum } from "../contexts/ForumContext";
import ForumCard from "../components/ForumCard";
import { useQuery } from "@tanstack/react-query";
import { getAllForumsByTopic } from "../services/forums";
const HomePage = ({ isHome }) => {
  const navigate = useNavigate();

  const [topic, setTopic] = useState("general");

  const forumQuery = useQuery({
    queryKey: ["forums", topic],
    queryFn: () => getAllForumsByTopic(topic),
  });

  const handleChange = (event, newValue) => {
    setTopic(newValue);
  };

  const onViewAllClick = () => {
    navigate(`/viewForums/${topic}`);
  };

  return (
    <Box
      sx={{
        backgroundColor: "rgba(209, 250, 229, 0.3)",
        paddingTop: "100px",
      }}
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
        <TabContext value={topic}>
          <Box>
            <TabList
              aria-label="Forums"
              onChange={handleChange}
              centered
              sx={{
                "& .MuiTab-root": {
                  color: "#3F826D",
                  fontSize: "20px",
                  fontWeight: "bold",
                  textTransform: "none", // Your custom hex color
                },
                "& .Mui-selected": {
                  color: "#E2725B", // Custom hex color for selected tab
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#E2725B", // Your custom hex color
                },
              }}
            >
              <Tab label="General" value="general" />

              <Tab label="Math" value="math" />

              <Tab label="Pop Culture" value="popculture" />
            </TabList>
          </Box>

          <TabPanel value="general">
            {forumQuery.data &&
              forumQuery.data
                .slice(0, 5)
                .map((forum) => (
                  <ForumCard key={forum.id} forum={forum} isHome={isHome} />
                ))}
          </TabPanel>
          <TabPanel value="math">
            {forumQuery.data &&
              forumQuery.data
                .slice(0, 5)
                .map((forum) => (
                  <ForumCard key={forum.id} forum={forum} isHome={isHome} />
                ))}
          </TabPanel>
          <TabPanel value="popculture">
            {forumQuery.data &&
              forumQuery.data
                .slice(0, 5)
                .map((forum) => (
                  <ForumCard key={forum.id} forum={forum} isHome={isHome} />
                ))}
          </TabPanel>

          <Box display="flex" justifyContent="center">
            <Button
              variant="text"
              sx={{
                color: "#E2725B",

                fontWeight: "bold",
                padding: "10px",
                borderRadius: "10px",
                height: "40px",
                padding: "15px",
                "&:hover": {
                  color: "#FF725B",
                },
              }}
              onClick={onViewAllClick}
            >
              View All
            </Button>
          </Box>
        </TabContext>
      </Box>
    </Box>
  );
};

export default HomePage;
