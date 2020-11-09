import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://lostandfound.movily.app/api/v1",
  header: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

export { instance };
