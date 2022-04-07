import { Endpoints } from "../constants";
import { Data } from "../model";
import axios from "axios";

export const getData = (endpoint: Endpoints, page: number) =>
  axios.get<Data>(endpoint, {
    params: {
      _page: page,
    },
  });
