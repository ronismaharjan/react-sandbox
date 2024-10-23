import "./Navbar.css"
import Menu from "../Menu/Menu"
import Login from"../Login/Login"
export default function Navbar(){
    return(
        <div className = "navbar">
            <div className = "navbar__logo">
                <img src ="../../public/brand_logo.png"/>
            </div>
                <Menu/>
                <Login/>
        </div>

    );

}
