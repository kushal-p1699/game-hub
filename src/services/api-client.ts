import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8962f5abd4554a28b78b52d3225211a6",
  },
});
