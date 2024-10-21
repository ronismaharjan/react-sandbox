import {useReducer} from "react" 
import ControlPannel from "./ControlPannel" 
import "./WhiteBoard.css"
export default function WhiteBoard(){

    function setColor(color,action){
        switch(action.type){
            case "yellow":
                return action.payload
            case "blue":
                return action.payload
            case "red":
                return action.payload
            default:
                return color 
        }   
    }

    const[color, dispatch] =useReducer(setColor, "black")

    return(
        <div className ={`whiteboard ${color}`}>
                <ControlPannel color = {color} dispatch = {dispatch}/>
        </div> 
    );

}
