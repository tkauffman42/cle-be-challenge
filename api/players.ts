import { VercelRequest, VercelResponse } from "@vercel/node";
import { playerOverviews } from "../data/PlayerOverviews"

module.exports = (req, res) => {
    const objectPlayers = playerOverviews;
    const startPlayer = {"players":objectPlayers};
    
    
    const playerId = Number(req.query.playerId);

    //console.log(req.query.playerId)
    
    try {
        if(playerId){
            objectPlayers.forEach(function(element) {
                if(element.playerId === playerId){
                    console.log("inside the if")
                    const playerDetail = {"playerDetail": element}
                    res.status(200).json(playerDetail)
                }
            });
        }else{
            console.log("inside the else");
            res.status(200).json(startPlayer);
        }
    } catch (error) {
        res.send(error)
    }


   // res.status(200).json(startPlayer);
 }
