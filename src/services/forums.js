import axios from "axios";

export function getAllForums() {
  return axios
    .get("https://fora-backend.onrender.com/forums")
    .then((res) => res.data);
}

export function getAllForumsByTopic(forumTopic) {
  return axios
    .get(`https://fora-backend.onrender.com/forums?topic=${forumTopic}`)
    .then((res) => res.data);
}

export function createForum(forum) {
  return axios
    .post("https://fora-backend.onrender.com/forums", forum)
    .then((res) => res.data);
}

export function updateForumRating(forumId, updatedForum) {
  return axios
    .put(`https://fora-backend.onrender.com/forums/${forumId}`, updatedForum)
    .then((res) => res.data);
}

export function addForumComment(forumId, updatedForum) {
  return axios
    .put(`https://fora-backend.onrender.com/forums/${forumId}`, updatedForum)
    .then((res) => {
      res.data;
    });
}

export function deleteForum(forumId) {
  return axios
    .delete(`https://fora-backend.onrender.com/forums/${forumId}`)
    .then((res) => res.data);
}
