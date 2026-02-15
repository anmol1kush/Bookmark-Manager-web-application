import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getBookmarks = () => api.get("/bookmarks");
export const createBookmark = (data) => api.post("/bookmarks", data);
export const deleteBookmark = (id) => api.delete(`/bookmarks/${id}`);
