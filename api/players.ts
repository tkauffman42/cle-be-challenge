import { VercelRequest, VercelResponse } from "@vercel/node";
import { playerBios } from "../data/playerBios";
import { playerStats} from "../data/playerStats";

module.exports = (req, res) => {

    const playerId = Number(req.query.playerId);
    
    try {
        if(playerId){
            const playerData = playerStats.filter(p => p.playerId === playerId);
            const playerBio = playerBios.filter(p => p.playerId === playerId);
            const allPlayerData = { ...playerBio[0], ...playerStats[0]}
            if(playerData.length < 1){
                return res.json({message: "please enter a valid playerId"});
            }
            return res.status(200).json({playerDetail: allPlayerData});
            
        }else{
            res.status(200).json({players:playerBios});
        }
    } catch (error) {
        res.send(error)
    }
 }
