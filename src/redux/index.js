import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://143.110.240.64:8000";

export default axios.create({
  baseURL,
});
