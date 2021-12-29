import { VercelRequest, VercelResponse } from "@vercel/node";
import { playerOverviews } from "../data/PlayerOverviews"

module.exports = (req, res) => {
    const objectPlayers = playerOverviews;
    const startPlayer = {"players":objectPlayers};
      
    const playerId = Number(req.query.playerId);
    
    try {
        if(playerId){
            objectPlayers.forEach(function(element, i) {
                if(element.playerId === playerId){
                    const playerDetail = {"playerDetail": element}
                    res.status(200).json(playerDetail)
                }else if (i === objectPlayers.length - 1){
                    res.send("You have entered an incorrect playerId")
                }
            });
        }else{
            res.status(200).json(startPlayer);
        }
    } catch (error) {
        res.send(error)
    }
 }
