import {useState} from "react"   
import {useUserprovider} from "../context/UserContext"
export default function Display(){
    const {users} = useUserprovider()
    const [user, setUser] =useState([])

    function handleClick(){
        setUser([users.map((user) =><p key ={user}>{user}</p>)])
        console.log(user)
    }

    return(
        <>
            <button onClick ={handleClick}>Display</button>
            {user}

        </>
    );

}
