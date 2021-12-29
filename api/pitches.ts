import { VercelRequest, VercelResponse } from "@vercel/node";
import { pitches } from "../data/Pitches"
import { playerOverviews } from "../data/PlayerOverviews";
import { playerDetails} from "../data/PlayerDetails";

module.exports = (req, res) => {

    const playerId = Number(req.query.playerId);
    const pitchesThrown = [];
    try {
        if(playerId){
            for(let i =0; i < pitches.length; i++){
                if(pitches[i].pitcherId === playerId){
                    //return res.json({playerDetail: playerDetails[i]});
                    pitchesThrown.push(pitches[i])
                }
            }
            //console.log(pitchesThrown);
            if (pitchesThrown.length < 1){
                return res.json({message: "incorect playerId"});
            }else{
                return res.json({pitches:pitchesThrown});
            }
        }else{
            res.json({message:"a playerId is required"});
        }
    } catch (error) {
        res.send(error)
    }
 }
