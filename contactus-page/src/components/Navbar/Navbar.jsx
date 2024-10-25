import "./Navbar.css"
export default function Navbar(){
    return(
        <nav className = "navbar">
            <ul className = "navbar__menu">
                <li className = "navbar__list"><a className = "navbar__link" href = "#">Home</a></li>
                <li className = "navbar__list"><a className = "navbar__link" href = "#">About</a></li>
                <li className = "navbar__list"><a className = "navbar__link" href = "#">Contact</a></li>
            </ul>
        </nav>

    );
}
