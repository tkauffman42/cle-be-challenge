import { VercelRequest, VercelResponse } from "@vercel/node";

export default (request: VercelRequest, response: VercelResponse) => {

const player = [

  {
    id: 1,
    fullName: "Troy Kauffman",
    throws: "right"
  },
  {
    id: 2,
    fullName: "Jeremy Kauffman",
    throws: "left"
  }
];
  
  var number = Number(request.query.id)

try {
  if(request.query.id){
    player.forEach(function(element){
      if(element.id === number){
        response.status(200).json(element);
      }
    })
  }
} catch (error) {
  response.status(200).send(error);
}

};
