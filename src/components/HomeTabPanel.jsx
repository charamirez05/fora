import React from "react";
import ForumCard from "./ForumCard";
import { TabPanel } from "@mui/lab";

export const HomeTabPanel = ({ topic, forums }) => {
  return (
    <div>
      <TabPanel value={topic}>
        {forums &&
          forums
            .slice(0, 4)
            .map((forum) => (
              <ForumCard key={forum.id} forum={forum} isHome={true} />
            ))}
      </TabPanel>
    </div>
  );
};
