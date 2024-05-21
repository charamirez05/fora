import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const ForumCommentCard = ({ comment }) => {
  return (
    <Box sx={{ padding: "5px 5px 5px 20px" }}>
      <Box
        sx={{
          backgroundColor: "white", // bg-white
          padding: "15px", // px-6 (6 * 4px = 24px)
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md
          borderRadius: "10px", // rounded-md (8px border radius)
        }}
      >
        <Stack direction="row" spacing={2}>
          <Typography
            variant="h6"
            sx={{
              fontStyle: "italic",
              
              color: "#E2725B",
              fontSize: { xs: "12px", md: "15px" },
            }}
          >
            {comment.author}
          </Typography>

          <Typography
            variant="h6"
            sx={{ color: "grey", fontSize: { xs: "12px", md: "15px" } }}
          >
            {comment && typeof comment.date === 'string' ? comment.date.split("T")[0] : ''}
          </Typography>
        </Stack>

        <Box
          sx={{
            borderBottom: "2px solid #E2725B",
            margin: "auto",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "20px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "12px", md: "15px" },
            }}
          >
            {comment.content}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ForumCommentCard;
