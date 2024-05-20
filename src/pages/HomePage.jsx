import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Button, Grid, Stack, Tab, Typography } from "@mui/material";
import ForumCard from "../components/ForumCard";
import Hero from "../components/Hero"

import useForums from "../services/useForums";
import { HomeTabPanel } from "../components/HomeTabPanel";
import { ForumLoading } from "../components/ForumLoading";

const HomePage = () => {
  const navigate = useNavigate();

  const [topic, setTopic] = useState("general");

  const { data, isLoading } = useForums(topic);

  const handleChange = (event, newValue) => {
    setTopic(newValue);
  };

  const onViewAllClick = () => {
    navigate(`/${topic}`);
  };

  return (
    <Box
       sx={{
        backgroundColor: "rgba(209, 250, 229, 0.3)",
        padding: { xs: "100px 10px 100% 10px", md: "100px 25px 100% 25px"},
      }} >

        <Hero />
      <Box
        
        sx={{
          backgroundColor: "white", // bg-white
          padding: { xs: "10px", md: "20px" }, // px-6 (6 * 4px = 24px)
          margin: { xs: "10px", md: "20px" }, // m-4 (4 * 4px = 16px)
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
                  fontSize: { xs: "14px", md: "20px" },
                  fontWeight: "bold",
                  textTransform: "none", // Your custom hex color
                },
                "& .Mui-selected": {
                  color: "#E2725B", // Custom hex color for selected tab
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "orange", // Your custom hex color
                },
              }}
            >
              <Tab label="General" value="general" />

              <Tab label="Math" value="math" />

              <Tab label="Pop Culture" value="popculture" />
            </TabList>
            <ForumLoading loading={isLoading} />
            <HomeTabPanel topic={"general"} forums={data} />

            <HomeTabPanel topic={"math"} forums={data} />

            <HomeTabPanel topic={"popculture"} forums={data} />
          </Box>

          <Box item display="flex" justifyContent="center">
            <Button
              variant="text"
              sx={{
                color: "#E2725B",
                fontSize: { xs: "14px", md: "20px" },
                fontWeight: "bold",
                borderRadius: "10px",       
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
