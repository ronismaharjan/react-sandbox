import { useCallback } from "react";
import "../Form/Form.css";
import { useFormContext } from "../../context/FormContext.jsx";
import Button from "../Button/Button";

export default function Form() {
    const { formdata, setFormData, name, email, message, setName, setEmail, setMessage } = useFormContext();

    function handleSubmit(e){
        e.preventDefault()
        if (formdata.length == 0 || formdata[formdata.length -1].email !=email){
        setFormData([...formdata, {name,email,message}])
        }
    }
    return (
        <div className="contact__section">
            <div className="contact__options">
                <Button name={"VIA SUPPORT CHAT"} />
                <Button name={"VIA CALL"} />
            </div>
            <Button isOutline={true} name={"VIA EMAIL FORM"} />
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    required
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    required
                    placeholder="example@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    rows="10"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button name={"Submit"} isOutline = {false} />
            </form>
        </div>
    );
}
