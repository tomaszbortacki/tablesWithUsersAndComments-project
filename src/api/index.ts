import { ApiUrls } from "../constants";
import { CommentsT } from "../model";
import axios from "axios";

export const getUsers = () => axios.get<CommentsT>(ApiUrls.USERS);

export const getComments = () => axios.get<CommentsT>(ApiUrls.COMMENTS);
