import axios from "axios";
import { API_URL } from "../../../config";

export const CreateRandomID = async () => {
  try {
    let res = await axios.get(`${API_URL}/ids`);
    let ID = await res.data[Math.floor(Math.random() * res.data.length)];
    return ID;
  } catch (err) {
    console.log(err);
  }
};
