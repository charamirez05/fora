import axios from "axios";

export function getAllForums() {
  return axios
    .get("https://fora-backend.onrender.com/forums")
    .then((res) => res.data);
}

export function getAllForumsByTopic(topic) {
  return axios
    .get(`https://fora-backend.onrender.com/forums?topic=${topic}`)
    .then((res) => res.data);
}

export function getForumById(id) {
  return axios
    .get(`https://fora-backend.onrender.com/forums/${id}`)
    .then((res) => res.data);
}

export function getAllForumsByTitle(title) {
  return axios
    .get(`https://fora-backend.onrender.com/forums?title=${title}`)
    .then((res) => res.data);
}

export function createForum(forum) {
  return axios
    .post("https://fora-backend.onrender.com/forums", forum)
    .then((res) => res.data);
}

export function rateForum(id, updatedForum) {
  return axios
    .put(`https://fora-backend.onrender.com/forums/${id}`, updatedForum)
    .then((res) => res.data);
}

export function addForumComment(id, updatedForum) {
  return axios
    .put(`https://fora-backend.onrender.com/forums/${id}`, updatedForum)
    .then((res) => {
      res.data;
    });
}

export function deleteForum(id) {
  return axios
    .delete(`https://fora-backend.onrender.com/forums/${id}`)
    .then((res) => res.data);
}
