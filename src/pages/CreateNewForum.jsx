import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Controller, useForm } from "react-hook-form";
import { createForum } from "../services/forums";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const CreateNewForum = () => {
  const form = useForm({
    defaultValues: {
      author: "",
      title: "",
      content: "",
      topic: "general",
    },
    mode: "onSubmit",
  });

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { register, handleSubmit, formState, control } = form;

  const { errors } = formState;

  const [topic, setTopic] = useState("general");

  const createForumMutation = useMutation({
    mutationFn: createForum,
    onSuccess: (data) => {
      /*  queryClient.setQueryData(["forums", data.id], data); */
      queryClient.invalidateQueries(["forums"], { exact: true });
    },
  });

  const submitForm = (data) => {
    createForumMutation.mutate({
      id: uuidv4().slice(0, 4),
      author: data.author,
      title: data.title,
      content: data.content,
      date: new Date(),
      comments: [],
      stars: 0,
      topic: data.topic,
    });

    toast.success("Forum created successfully!");

    return navigate("/ViewForums/All");
  };

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  return (
    <Box
      sx={{ backgroundColor: "rgba(209, 250, 229, 0.3)", paddingTop: "100px" }}
    >
      <Box
        sx={{
          margin: "auto",
          maxWidth: "1000px", // max-w-2xl (32rem * 16px = 512px)
          paddingTop: "96px", // py-24 (24 * 4px = 96px)
          paddingBottom: "96px", // py-24 (24 * 4px = 96px)
        }}
      >
        <Box
          sx={{
            backgroundColor: "white", // bg-white
            padding: "30px", // px-6 (6 * 4px = 24px)
            margin: "16px", // m-4 (4 * 4px = 16px)
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md
            borderRadius: "10px", // rounded-md (8px border radius)
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#3F826D", textAlign: "center", fontWeight: "bold" }}
            gutterBottom
          >
            Create New Forum
          </Typography>

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
              <FormControl>
                <InputLabel
                  id="topic-label"
                  sx={{
                    color: '#3F826D'
                  }}
                >
                  Topic
                </InputLabel>
                <Controller
                  name="topic"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Topic is required. Please choose one." }}
                  render={({ field }) => (
                    <Select
                      labelId="topic-label"
                      id="topic"
                      value={topic}
                      label="Topic"
                      onChange={handleTopicChange}
                    >
                      <MenuItem value="general">General</MenuItem>
                      <MenuItem value="math">Math</MenuItem>
                      <MenuItem value="popculture">PopCulture</MenuItem>
                    </Select>
                  )}
                  error={!!errors.topic}
                  helperText={errors.topic?.message}
                />
              </FormControl>
              <TextField
                label="Title"
                type="text"
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#3F826D", 
                  },
                }}
                {...register("title", {
                  required: {
                    value: true,
                    message: "Title is required",
                  },
                })}
                error={!!errors.title}
                helperText={errors.title?.message}
              />
              <TextField
                label="Content"
                multiline
                rows={8}
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#3F826D", 
                  },
                }}
                {...register("content", {
                  required: {
                    value: true,
                    message: "Content is required",
                  },
                })}
                error={!!errors.content}
                helperText={errors.content?.message}
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
                disabled={createForumMutation.isLoading}
              >
                Create New Forum
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateNewForum;
