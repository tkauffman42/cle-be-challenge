import { VercelRequest, VercelResponse } from "@vercel/node";
import { playerOverviews } from "../data/PlayerOverviews"

export default (request: VercelRequest, response: VercelResponse) => {
  
  //response.status(200).send(`Hello ${name}!  J`);
  response.status(200).json(`${playerOverviews}`)
};
