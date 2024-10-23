import "./Hero.css"
import InfoSection from "../InfoSection/InfoSection"
import HeroDisplay from"../HeroDisplay/HeroDisplay"
import Shop from "../Shop/Shop"
export default function Hero(){
    return(
        <div className = "hero">
            <InfoSection/>
            <HeroDisplay/>
        </div>
    );

}
