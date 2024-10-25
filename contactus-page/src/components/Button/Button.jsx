import {memo} from "react"
import "./Button.css"
export default  memo(function Button({name, isOutline}){
    return(
        <>
        <button className ={isOutline ?"outline_btn":"primary_btn"}>{name}</button>
        </>
    );
})


