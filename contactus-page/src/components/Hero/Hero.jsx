import "./Hero.css"
import Form from "../Form/Form"
import Button from "../Button/Button"
export default function Hero(){
    return(
        <div className ="hero">
            <div className ="hero__desc">
                <h1>CONTACT US</h1>
                <p>
                LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
                WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
                REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
                EMAIL, OR SOCIAL MEDIA.
                </p>
            </div>
            <div className="hero__form-section">
                <Form/>
                <div className ="hero__image">
                    <img src = "../../public/hero.svg"/>
                </div>
            </div>
        </div>
    );

}
