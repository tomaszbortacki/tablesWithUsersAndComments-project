import { ApiUrls } from "../constants";
import { CommentsT } from "../model";
import axios from "axios";

export const getUsers = () => axios.get<Array<CommentsT>>(ApiUrls.USERS);

export const getComments = () => axios.get<Array<CommentsT>>(ApiUrls.COMMENTS);
