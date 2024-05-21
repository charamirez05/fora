import HomeIcon from "@mui/icons-material/Home";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import TopicIcon from "@mui/icons-material/Topic";
import AddIcon from "@mui/icons-material/Add";
import MicExternalOnIcon from "@mui/icons-material/MicExternalOn";
import CalculateIcon from "@mui/icons-material/Calculate";
import ScienceIcon from "@mui/icons-material/Science";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import React from "react";
import { Button, ListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NavListItem = ({ topic }) => {
  const navigate = useNavigate();
  const buttonIcon = () => {
    switch (topic) {
      case "All":
        return <ViewCarouselIcon sx={{ color: "#E2725B" }} />;
      case "general":
        return <TopicIcon sx={{ color: "#E2725B" }} />;
      case "math":
        return <CalculateIcon sx={{ color: "#E2725B" }} />;
      case "popculture":
        return <MicExternalOnIcon sx={{ color: "#E2725B" }} />;
      case "science":
        return <ScienceIcon sx={{ color: "#E2725B" }} />;
      case "foreign":
        return <Diversity2Icon sx={{ color: "#E2725B" }} />;

      default:
        return <ViewCarouselIcon sx={{ color: "#E2725B" }} />;
    }
  };

  const onViewForums = () => {

    navigate(`/forums/${topic}`);
  };

  return (
    <Button
      variant="text"
      sx={{
        marginLeft: "15px",
        fontSize: { xs: "15px", md: "25px" },
        color: "#3F826D",
        "&:hover": {
          color: "#FF725B",
        },
        textTransform: "none",
      }}
      startIcon={buttonIcon()}
      onClick={onViewForums}
    >
      View {topic.charAt(0).toUpperCase() + topic.slice(1)} Forums
    </Button>
  );
};
