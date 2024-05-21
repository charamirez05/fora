import { Box, Typography } from "@mui/material";
import React from "react";

export const ForumLoading = ({ loading }) => {
  return (
    <>
      {loading ? (
        <Box
          sx={{
            padding: { xs: "100px 10px 100% 10px", md: "90px 25px 100% 25px" },
          }}
        >
          <Box
            sx={{
              padding: { xs: "10px", md: "20px" },
              margin: { xs: "10px", md: "10px" },
              display: "flex",
              justifyContent: "center",
              width: "100%",
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
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};
