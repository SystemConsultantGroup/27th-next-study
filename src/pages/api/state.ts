import { NextApiRequest, NextApiResponse } from "next";

let state = {};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "PUT":
      state = req.body;
      res.status(204).end(); // HTTP 204 No Content
      break;
    case "GET":
      res.send(state);
      break;
    // CORS 요청이 아니기 때문에 case "OPTION"을 구현할 필요가 없음
    default:
      res.status(404).send({ message: "Unknown method" });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};
