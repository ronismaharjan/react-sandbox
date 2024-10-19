import {useState} from "react"
import {useUserprovider} from "../context/UserContext"
export default function Form(){

    const [user, setUser] = useState("")
    const {users, setUsers} = useUserprovider()

    function handleSubmit(e){
        e.preventDefault();
        setUser("")
    }

    function handleAdd(){
        setUsers([...users,user])
        console.log(users);

    }

    return (
        <>
        <form onSubmit = {handleSubmit}>
        <input type = "text" value = {user} onChange = {(e) => setUser(e.target.value)}/>
        <button onClick = {handleAdd}>Add</button>
        </form>
        </>
    );

}
