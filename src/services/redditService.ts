import axios from "axios";
import { RedditResult } from "../models/RedditResult";

const redditBaseUrl = process.env.REACT_APP_REDDIT_BASE_URL || "";

export const fetchRedditPosts = (): Promise<RedditResult> => {
  return axios.get(`${redditBaseUrl}?limit=10`).then((res) => res.data);
};
