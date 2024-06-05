import { useState } from "react";

const User = (props)=>{
    const [count,setState] = useState(0);
    
    const {name,location,contact} = props
    return(
        <div className="user-cards">
            <p>{count}</p>
            <button onClick={()=>{
                setState(count-1)
            }}>decrease</button>
            
            <p>Name:{name}</p>
            <p>Location:{location}</p>
            <p>Contact:{contact}</p>
        </div>
    )
}
export default User;