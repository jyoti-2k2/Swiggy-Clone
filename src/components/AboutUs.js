import React from "react";

import User from "./User.js"
import UserClass from "./UserClass.js";
// import UserContext from "../utils/UserContext.js";

 class AboutUs extends React.Component{
    constructor(props){
        super(props);
        // console.log(this.props.name+"constructor of parent is called")
    }
    componentDidMount(){
        // console.log(this.props.name+"parent compountDidMount is called")
    }
    render(){
        // console.log(this.props.name+"render of parent is called")
        return (
            <div>
                <div className="about-us">
                    <h1>about us page</h1>
                    {/* <UserContext.Consumer>
                        {({loggedInUser})=><h1>{loggedInUser}</h1>}
                    </UserContext.Consumer> */}
                
                   
    
                </div>
                <div className="user-info">
                    
                    <UserClass key="1" name={"first"} location={"Delhi"} contact={"abc@gmail.com"}/>                    
            
                </div>
            </div>
        )
    
    }
 }
    


export default AboutUs;