import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Button, Stack, Tab, Typography } from "@mui/material";
import { useForum } from "../contexts/ForumContext";
import ForumCard from "../components/ForumCard";

const HomePage = ({ isHome }) => {
  const {
    forums,
    generalForum,
    mathForum,
    popCultureForum,
    fetchForums,
    setForumTopics,
  } = useForum();

  useEffect(() => {
    fetchForums();
    setForumTopics(isHome);
  }, [forums]);
  const navigate = useNavigate();

  const onViewForum = (forumTopic) => {
    navigate(`/viewForums/${forumTopic}`);
  };

  const [value, setValue] = useState("math");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "rgba(209, 250, 229, 0.3)",
          paddingTop: "100px",
        }}
      >
        <TabContext value={value}>
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
                  backgroundColor: "#ff5733", // Your custom hex color
                },
              }}
            >
              <Tab label="General Forum" value="general" />

              <Tab label="Math Forum" value="math" />

              <Tab label="Pop Culture Forum" value="popculture" />
            </TabList>
          </Box>
          <TabPanel value="general">
            {generalForum.map((post) => (
              <ForumCard key={post.id} post={post} isHome={isHome} />
            ))}
          </TabPanel>
          <TabPanel value="math">
            {mathForum.map((post) => (
              <ForumCard key={post.id} post={post} isHome={isHome} />
            ))}
          </TabPanel>
          <TabPanel value="popculture">
            {popCultureForum.map((post) => (
              <ForumCard key={post.id} post={post} isHome={isHome} />
            ))}
          </TabPanel>

          <Box display="flex" justifyContent="center">
            <Button
              sx={{
                color: "#FFFFFF",
                backgroundColor: "#E2725B",
                fontWeight: "bold",
                padding: "10px",
                borderRadius: "10px",
                
              }}
              onClick={() => onViewForum(value)}
            >
              View All
            </Button>
          </Box>
        </TabContext>
      </Box>
    </>
  );
};

export default HomePage;
