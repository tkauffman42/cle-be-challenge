import { VercelRequest, VercelResponse } from "@vercel/node";
import { playerOverviews } from "../data/PlayerOverviews"

module.exports = (req, res) => {
    const objectPlayers = playerOverviews;
    //const startPlayer = {"players":objectPlayers};
    
    
    const playerId = Number(req.query.playerId);

    //console.log(req.query.playerId)
    
    try {
        if(playerId){
            objectPlayers.forEach(function(element) {
                if(element.playerId === playerId){
                    const playerDetail = {"playerDetail": element}
                    res.status(200).json(playerDetail)
                }
            });
        }
    } catch (error) {
        res.send(error)
    }


   // res.status(200).json(startPlayer);
 }
