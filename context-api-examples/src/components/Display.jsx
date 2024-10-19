import {useUserprovider} from "../context/UserContext"
export default function Display(){
    const {users} = useUserprovider()
    function handleClick(){
        console.log(users);
    }
    return(
        <>
            <button onClick = {handleClick}>Display</button>

        </>

    );


}
