import React, { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { addForumComment } from "../services/forums";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Box, Button, Icon, Stack, TextField, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import CloseIcon from "@mui/icons-material/Close";

const CommentModal = ({ closeModal, forum }) => {
  const form = useForm({
    defaultValues: {
      author: "",
      comment: "",
    },
    mode: "onSubmit",
  });

  const queryClient = useQueryClient();

  const { register, handleSubmit, formState, control } = form;

  const { errors } = formState;

  const createCommentMutation = useMutation({
    mutationFn: ({ id, updatedForum }) => {
      addForumComment(id, updatedForum);
    },
    onSuccess: (data) => {
      //   queryClient.invalidateQueries(["forums"]);
    },
  });

  const submitForm = (data) => {
    const newComment = {
      id: uuidv4().slice(0, 4),
      author: data.author,
      content: data.comment,
      date: new Date(),
    };

    forum.comments.push(newComment);

    createCommentMutation.mutate({ id: forum.id, updatedForum: forum });

    toast.success("Forum created successfully!");
  };

  return (
    <Box
      sx={{
        backgroundColor: "rgba(209, 250, 229, 0.3)",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",

          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box width="800px">
          <Box
            sx={{
              backgroundColor: "white",
              padding: "20px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "center", paddingBottom: "20px" }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#3F826D",
                  fontWeight: "bold",
                }}
              >
                Add Comment
              </Typography>
              <CloseIcon
                sx={{
                  position: "relative",
                  left: { xs: 50, md: 250 },
                  alignContent: "left",
                }}
                onClick={closeModal}
              />
            </Stack>

            <form onSubmit={handleSubmit(submitForm)} noValidate>
              <Stack spacing={2}>
                <TextField
                  label="Author"
                  type="text"
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "#3F826D",
                    },
                  }}
                  {...register("author", {
                    required: {
                      value: true,
                      message: "Author is required",
                    },
                  })}
                  error={!!errors.author}
                  helperText={errors.author?.message}
                />

                <TextField
                  label="Comment"
                  multiline
                  rows={8}
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "#3F826D",
                    },
                  }}
                  {...register("comment", {
                    required: {
                      value: true,
                      message: "Comment is required",
                    },
                  })}
                  error={!!errors.comment}
                  helperText={errors.comment?.message}
                />

                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    fontSize: "17px",
                    backgroundColor: "#E2725B",
                    borderRadius: "9999px", // rounded-full
                    fontWeight: "bold", // font-bold
                    width: "100%", // w-full
                    boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.5)", // focus:shadow-outline
                    outline: "none", // focus:outline-none
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "#FF725B",
                    },
                  }}
                  disabled={createCommentMutation.isLoading}
                >
                  Add New Comment
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CommentModal;
