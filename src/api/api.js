import axios from "axios";

const instance = axios.create({
  baseURL: "https://6395676390ac47c6806a58d8.mockapi.io/api/tasks",
});

export const tasksApi = {
  getTasks: async () => {
    const response = await instance.get();
    return response.data;
  },
};
