import { useQuery } from "@tanstack/react-query";
import { getAllForums, getAllForumsByTopic } from "./forums";

const useForums = (topic) =>
  useQuery({
    queryKey: ["forums", topic],
    queryFn: () =>
      topic === "All" ? getAllForums() : getAllForumsByTopic(topic),
    refetchInterval: 1000,
  });

export default useForums;
