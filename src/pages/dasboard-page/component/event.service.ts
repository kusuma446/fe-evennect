import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5050";

export async function fetchOrganizerEvents(token: string) {
  const response = await axios.get(`${BASE_URL}/events/organizer`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
