import {createContext, useContext} from "react"   

export const Users = createContext([])

export const UserContextProvider = Users.Provider


//hook to add user to user context
export function useUserprovider(){
    return useContext(Users)

}

