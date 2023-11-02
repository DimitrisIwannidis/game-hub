import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7b88ba184afe4cc0bb3d2381fbce0d0e",
  },
});
