import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

interface FetchTodosParams {
  page?: number;
  limit?: number;
}

export const fetchTodos = ({ page, limit }: FetchTodosParams) => {
  return axios
    .get(`${BASE_URL}/todos`, {
      params: {
        _page: page,
        _limit: limit,
      },
    })
};
