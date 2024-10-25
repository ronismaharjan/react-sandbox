import {useFormContext } from "../../context/FormContext";

export default function Display() {
    const { formdata,email } = useFormContext();
    return(    
        <>
            {formdata.map((formobject, index) => {
                const formattedString = `Name: ${formobject.name}
                Email: ${formobject.email}
                Message: ${formobject.message}`;
                return <p key={index}>{formattedString}</p>;
            })}
        </>
);

}
