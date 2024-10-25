import { createContext, useContext, useState } from "react";

export const FormContext = createContext({});

export function FormContextProvider({ children }) {
    const [formdata, setFormData] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(""); // Fixed typo here

    return (
        <FormContext.Provider value={{ formdata, setFormData, name, setName, email, setEmail, message, setMessage }}>
            {children}
        </FormContext.Provider>
    );
}

export function useFormContext() {
    return useContext(FormContext);
}
