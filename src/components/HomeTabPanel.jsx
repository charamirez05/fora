import React from "react";
import ForumCard from "./ForumCard";
import { TabPanel } from "@mui/lab";
import { Box, Grid } from "@mui/material";

export const HomeTabPanel = ({ topic, forums }) => {
  return (
    <Box  sx={{margin: '-10px'}}>
      <TabPanel value={topic}>
        {forums &&
          forums
            .slice(0, 4)
            .map((forum) => (
              <ForumCard key={forum.id} forum={forum} isHome={true} />
            ))}
      </TabPanel>
    </Box>
  );
};
