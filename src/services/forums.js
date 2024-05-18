import axios from "axios";

export function getAllForums() {
  return axios
    .get("https://fora-backend.onrender.com/forums")
    .then((res) => res.data);
}

export function getAllForumsByTopic(forumtopic) {
  return axios
    .get(`https://fora-backend.onrender.com/forums?topic=${forumtopic}`)
    .then((res) => res.data);
}

export function createForum(forum) {
  return axios
    .post("https://fora-backend.onrender.com/forums", {
        id: forum.id,
        author: forum.author,
        title: forum.title,
        content: forum.content,
        date: forum.date,
        comments: forum.comments,
        topic: forum.topic,
        stars: forum.stars
    })
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
    .then((res) => res.data);
}


export function deleteForum(forumId) {
    return axios
      .delete(`https://fora-backend.onrender.com/forums/${forumId}`)
      .then((res) => res.data);
  }