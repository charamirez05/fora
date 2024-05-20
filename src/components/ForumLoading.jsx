import { Box, Typography } from "@mui/material";
import React from "react";

export const ForumLoading = ({ loading }) => {
  return (
    <>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            padding: "50px", // px-6 (6 * 4px = 24px)
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
            Loading...
          </Typography>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};
