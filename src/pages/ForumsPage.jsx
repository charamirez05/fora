import React, { useEffect, useState } from "react";
import ForumsListing from "../components/ForumsListing";
import { useForum } from "../contexts/ForumContext";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllForums, getAllForumsByTopic } from "../services/forums";

const ForumsPage = () => {
  const { topic } = useParams();

  const forumQuery = useQuery({
    queryKey: ["forums", topic],
    queryFn: () =>
      topic === "All" ? getAllForums() : getAllForumsByTopic(topic),
    refetchInterval: 1000,
  });

 
  return (
    <ForumsListing
      forums={forumQuery.data}
      topic={topic.charAt(0).toUpperCase() + topic.slice(1)}
    />
  );
};

export default ForumsPage;
