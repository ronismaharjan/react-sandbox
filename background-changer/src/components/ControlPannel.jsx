import "./ControlPannel.css"
export default function ControlPannel({color, dispatch}){

   return(

        <div className = "control-pannel">
           <button onClick = {() =>dispatch({type:"yellow",payload:"yellow"})}>Yellow</button> 
           <button onClick = {() =>dispatch({type:"red",payload:"red"})}>Red</button> 
           <button onClick = {() =>dispatch({type:"blue",payload:"blue"})}>Blue</button> 
        </div>


    );

}
