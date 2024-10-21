import {useState} from "react"
import {UserContextProvider} from "./context/UserContext"
import Display from "./components/Display"
import Form from "./components/Form"
export default function App(){
    const [users, setUsers] = useState([])
    return(
        <UserContextProvider value = {{users, setUsers}}>

        <Form/>
        <Display/>

        </UserContextProvider>
    );


}
