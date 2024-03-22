import { ApiSuccessResponse } from "../_interfaces/api";
import { getToken } from "./userActions";

export const getRequests = async (page: string) => {
  const response = await fetch(`${process.env.BACKEND_URL}/requests?limit=1&page=${page}`, {
    headers: {
      Authorization: `Bearer ${await getToken()}`,
    },
    next: {
      tags: ["saves"],
    },
  });

  const data = await response.json();

  if (!data.success) return { requests: [], totalPages: 0 };

  return { requests: data.data.requests!, totalPages: data.pages };
}