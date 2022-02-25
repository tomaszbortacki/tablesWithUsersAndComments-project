import { ApiUrls } from "../constants";
import { dataT } from "../model";
import axios from "axios";

export const getData = (url: ApiUrls) => axios.get<Array<dataT>>(url);
