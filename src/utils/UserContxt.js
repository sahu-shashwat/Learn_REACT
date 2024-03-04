import { createContext } from "react";

const UserContext=createContext({
    loggedinUser:'DefaultUser',
    UserNumber:123
})
export default UserContext