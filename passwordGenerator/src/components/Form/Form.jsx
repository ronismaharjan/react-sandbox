import {useEffect,useState,useRef} from "react"
import "./Form.css"
export default function Form(){

    //All state variables used for the storing data of the form
    const [password, setPassword] = useState("")
    const [length,setLength] = useState("8")
    const [needNumber, setNeedNumber] = useState(true)
    const [needCharacter, setNeedCharacter] = useState(true)
    const inputelement = useRef()

    //used to change the value of password state when one of the state form
    //above changes
    useEffect(()=>{

        function passwordGenerator(givenLength,needNumber,needCharacter){
            const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const numbers = '1234567890'
            const characters = '!@#$%^&*()_-='
            let structure =[]
            let pass = ""

            //Fisher yates shuffle algorith to shuffle array
            function shuffleArray(array) {
                let shuffledpass = [...array]; // Create a copy of the input array
                for (let i = shuffledpass.length - 1; i > 0; i--) {
                    // Generate a random index from 0 to i
                    let j = Math.floor(Math.random() * (i + 1));

                    // Swap elements at index i and j
                    [shuffledpass[i], shuffledpass[j]] = [shuffledpass[j], shuffledpass[i]];
                }
                return shuffledpass; // Return the shuffled array
            }

            if (needNumber) structure.push(numbers);
            if (needCharacter) structure.push(characters);
            structure.unshift(letters); // Always include letters

            // Ensure at least one character from each required category
            if (needNumber) pass += numbers[Math.floor(Math.random() * numbers.length)];
            if (needCharacter) pass += characters[Math.floor(Math.random() * characters.length)];
            pass += letters[Math.floor(Math.random() * letters.length)];

            for (let i = pass.length;i< givenLength; i++){
                const randomgroup =structure[Math.floor(Math.random() * structure.length)] 
                pass += randomgroup[Math.floor(Math.random() * randomgroup.length)]
            }
            const arraypass = pass.split("")
            const shuffledarraypass = shuffleArray(arraypass);
            pass = shuffledarraypass.join("")
            setPassword(pass);
        }
        passwordGenerator(Number(length),needNumber, needCharacter)

    },[length, needNumber, needCharacter])

    //Handle page refresh 
    function handleSubmit(e){
        e.preventDefault()
    }
    
    function handleCopy(){
            navigator.clipboard.writeText(password);
            inputelement.current.select()

    }
    return(

        <form className="form" onSubmit ={(e) =>handleSubmit(e)}>
            <h1>Password Generator</h1>
            <div className = "form__input-section">
                <input ref = {inputelement}type="text" value = {password} onChange ={(e)=>setPassword(e.target.value)}/>
                <button onClick = {handleCopy}>Copy</button>
            </div>
            <div className="control-section">
                <input type="range" id = "length" value={length} min = "8" max = "100" onChange ={(e) =>setLength(e.target.value)} />
                <label htmlFor = "length">length:{length}</label>
                <input type = "checkbox" id = "number" checked = {needNumber} onChange ={ (e) =>setNeedNumber(e.target.checked)}/> 
                <label htmlFor = "number">Number</label>
                <input type = "checkbox" id = "character" checked = {needCharacter} onChange ={ (e) =>setNeedCharacter(e.target.checked)}/> 
                <label htmlFor = "character">Character</label>
            </div>
        </form>

    );

}
