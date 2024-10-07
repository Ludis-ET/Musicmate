import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "866be5f0982a42379c2ecf1b2d297b6e",
  },
});
