import { api } from "./api.service";

export const getPosts = async () => {
  const resp = await api.get("/posts");

  return;
};

export const getPost = async (id: string) => {
  const resp = await api.get(`/posts/${id}`);

  return;
};

export const getComments = async (id: string) => {
  const resp = await api.get(`/comments?postId=${id}`);

  return;
};
