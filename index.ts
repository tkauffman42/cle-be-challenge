import { VercelRequest, VercelResponse } from "@vercel/node";

module.exports = (req, res) => {
    const { name = "World" } = req.query;
  return res.send(`Hello ${name}!`);
}