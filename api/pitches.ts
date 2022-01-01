import { VercelRequest, VercelResponse } from "@vercel/node";
import { pitches } from "../data/Pitches"


module.exports = (req, res) => {

    const playerId = Number(req.query.playerId);
    try {
        if(playerId){
            const pitchData = pitches.filter(p => p.pitcherId === playerId);
            if(pitchData.length < 1){
                return res.json({message: "please enter a valid playerId"});
            }
            return res.status(200).json({pitches: pitchData});
        }else{
            return res.json({message: "A playerId is required"})
        }
    } catch (error) {
        res.send(error);
    }
 }
