import { useState,useEffect } from "react"
const useOnlineStatus = () =>{
    const [onlineStatus,setOnlineStatus]=useState(true)
    useEffect(()=>{
        isOnline()
    },[])
    const isOnline = ()=>{
        window.addEventListener("offline",(event)=>{
            setOnlineStatus(false);

        })
        window.addEventListener("online",(event)=>{
            setOnlineStatus(true);

        })
    }
    return onlineStatus;
}
export default useOnlineStatus;