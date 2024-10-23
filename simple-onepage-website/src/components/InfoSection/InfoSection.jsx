import "./InfoSection.css"
import Shop from "../Shop/Shop"
export default function InfoSection(){
    return(
        <div className = "infosection">
            <div className = "infosection__desc">
                <h1>YOUR FEET DESERVES THE BEST</h1>
                <p> YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className = "infosection__button">
                    <button>Shop Now</button>
                    <button>Category</button>
                </div>
            </div>
            <Shop/>
        </div>

    );


}
