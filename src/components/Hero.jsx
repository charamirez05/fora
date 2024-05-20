import { Box, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Box style={{ textAlign: "center" }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "50px", md: "60px" },
          color: "#3F826D",
          fontWeight: "bold",
        }}
      >
        Fora
      </Typography>
      <Typography variant="h6" sx={{ color: "#E2725B", fontStyle: 'italic', fontSize: { xs: "15px", md: "20px" } }}>
        Express your thoughts freely and anonymously
      </Typography>
    </Box>
  );
};

export default Hero;
