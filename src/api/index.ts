import { ApiUrls } from "../constants";
import { Data } from "../model";
import axios from "axios";

export const getData = (url: ApiUrls) => axios.get<Array<Data>>(url);
