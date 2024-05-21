import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ForumCommentCard from "../components/ForumCommentCard";
import { toast } from "react-toastify";
import CommentModal from "../components/CommentModal";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getForumById, rateForum, deleteForum } from "../services/forums";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StarIcon from "@mui/icons-material/Star";

const ForumPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const forumQuery = useQuery({
    queryKey: ["forums", id],
    queryFn: () => getForumById(id),
    refetchInterval: 3000,
  });

  const rateForumMutation = useMutation({
    mutationFn: ({ id, updatedForum }) => {
      rateForum(id, updatedForum);
    },
  });

  const deleteForumMutation = useMutation({
    mutationFn: ({ id }) => {
      deleteForum(id);
    },
  });

  const rateForumFunction = () => {
    const updatedForum = {
      author: forumQuery.data.author,
      title: forumQuery.data.title,
      content: forumQuery.data.content,
      date: forumQuery.data.date,
      comments: forumQuery.data.comments,
      stars: forumQuery.data.stars + 1,
      topic: forumQuery.data.topic,
    };

    rateForumMutation.mutate({ id: id, updatedForum: updatedForum });

    toast.success("Forum rated successfully!");
  };

  const deleteForumFunction = () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this forum?"
    );

    if (!confirm) return;

    deleteForumMutation.mutate({ id: id });

    toast.success("Forum deleted successfully!");

    navigate(`/forums/${forumQuery.data.topic}`);
  };

  return (
    <Box
      sx={{
        backgroundColor: "rgba(209, 250, 229, 0.3)",
        padding: { xs: "100px 0px 100% 0px", md: "100px 25px 100% 25px" },
      }}
    >
      <Box sx={{ paddingLeft: "25px" }}>
        <Link
          to={`/forums/${forumQuery.data && forumQuery.data.topic}`}
          className="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
          <ArrowBackIcon style={{ color: "#E2725B", marginRight: "2px" }} />
          <Typography
            variant="h6"
            sx={{
              color: "#3F826D",
              fontWeight: "bold",
              fontSize: { xs: "15px", md: "20px" },
            }}
          >
            Back to Forum Listings
          </Typography>
        </Link>
      </Box>

      <Box
        sx={{
          backgroundColor: "white", // bg-white
          padding: "20px 20px 10px 20px", // px-6 (6 * 4px = 24px)
          margin: "20px", // m-4 (4 * 4px = 16px)
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md
          borderRadius: "10px", // rounded-md (8px border radius)
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ marginBottom: "5px", fontSize: { xs: "10px", md: "15px" } }}
        >
          {forumQuery.data && forumQuery.data.date.split("T")[0]}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            marginBottom: "5px",
            color: "#3F826D",
            fontWeight: "bold",
            fontSize: { xs: "30px", md: "35px" },
          }}
        >
          {forumQuery.data && forumQuery.data.title}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            marginBottom: "5px",
            fontStyle: "italic",
            fontSize: { xs: "10px", md: "15px" },
          }}
        >
          by {forumQuery.data && forumQuery.data.author}
        </Typography>

        <Box
          sx={{
            borderBottom: "2px solid #E2725B",
            margin: "auto",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "20px",
          }}
        >
          <Typography
            variant="h6"
            sx={{ marginBottom: "5px", fontSize: { xs: "15px", md: "20px" } }}
          >
            {forumQuery.data && forumQuery.data.content}
          </Typography>
        </Box>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          sx={{ paddingTop: "20px", width: "100%" }}
        >
          <Stack direction="row">
            <StarIcon
              sx={{
                color: "#E2725B",
                margin: { xs: "0 3px 8px 0", md: "3px 5px 0 0 " },
              }}
            />
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                color: "#E2725B",
                fontSize: { xs: "12px", md: "20px" },
              }}
            >
              {forumQuery.data && forumQuery.data.stars} Stars
            </Typography>
          </Stack>

          <Box>
            <Button
              variant="text"
              sx={{
                margin: { xs: "0 -2px  10px 0", md: "0 15px 0 0px " },
                fontWeight: "bold",
                textTransform: "none",
                color: "#E2725B",
                fontSize: { xs: "12px", md: "20px" },
              }}
              onClick={rateForumFunction}
            >
              Rate
            </Button>

            <Button
              variant="text"
              sx={{
                margin: { xs: "0 -2px 10px -10px", md: "0 15px 0 0px " },
                fontWeight: "bold",
                textTransform: "none",
                color: "#E2725B",
                fontSize: { xs: "12px", md: "20px" },
              }}
              onClick={openModal}
            >
              Add a Comment
            </Button>
            {isModalOpen && (
              <CommentModal
                closeModal={closeModal}
                forum={forumQuery.data && forumQuery.data}
              />
            )}

            <Button
              variant="text"
              sx={{
                margin: { xs: "0 -2px 10px -10px", md: "0 15px 0px 0px " },
                fontWeight: "bold",
                textTransform: "none",
                color: "#E2725B",
                fontSize: { xs: "12px", md: "20px" },
              }}
              onClick={deleteForumFunction}
            >
              Delete
            </Button>
          </Box>
        </Stack>
      </Box>

      <Box sx={{ padding: "0 20px 0 15px" }}>
        {forumQuery.data &&
        forumQuery.data.comments &&
        forumQuery.data.comments.length !== 0 ? (
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#3F826D",
                marginBottom: "5px",
                fontSize: { xs: "20px", md: "25px" },
                padding: "0 20px 0 15px",
              }}
            >
              Comments
            </Typography>
            {forumQuery.data.comments &&
              forumQuery.data.comments.map((comment) => (
                <ForumCommentCard key={comment.id} comment={comment} />
              ))}
          </Box>
        ) : (
          <Box sx={{ paddingLeft: "25px" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#3F826D",
                marginBottom: "5px",
                fontSize: { xs: "15px", md: "20px" },
              }}
            >
              No Comments Yet
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ForumPage;
