import { NextApiRequest, NextApiResponse } from "next";
import { ApiResponseItem } from "../../types/api-response-item";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponseItem[]>
) => {
  if (req.method === "GET") {
    const result = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((response) => response.json());

    res.send(result);
  }
};
