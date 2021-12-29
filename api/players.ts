import { VercelRequest, VercelResponse } from "@vercel/node";
import { playerOverviews } from "../data/PlayerOverviews";
import { playerDetails} from "../data/PlayerDetails";

module.exports = (req, res) => {

    const playerId = Number(req.query.playerId);
    
    try {
        if(playerId){
            for(let i =0; i < playerDetails.length; i++){
                if(playerDetails[i].playerId === playerId){
                    return res.json({playerDetail: playerDetails[i]});
                }
            }
            return res.json({message: "incorrect playerId"});
        }else{
            res.status(200).json({players:playerOverviews});
        }
    } catch (error) {
        res.send(error)
    }
 }
