import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://fe-test-api.nwappservice.com",
});

export default apiClient;
