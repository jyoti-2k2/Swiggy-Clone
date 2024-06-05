import { createContext } from "react"

const UserContext = createContext({ // to create a context in our file we have to import "createContext" from our react
  loggedInUser:"defaultUser",
  
})



export default UserContext