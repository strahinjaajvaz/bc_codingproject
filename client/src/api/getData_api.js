import axios from "axios";
import { URL } from "./common";

export const getData = () => axios.get(URL);
