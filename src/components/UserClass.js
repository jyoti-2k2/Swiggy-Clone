import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props)
        this.state={
            userInfo:{
                name:"dummy",
                location:"default",
                conatact:"default",

            }
            
        }
        // console.log(this.props.name+"child constructor is called")
    }
    async componentDidMount(){
        // console.log(this.props.name+"child componentDidMount is called")
       
        const data = await fetch("https://dummyjson.com/users")
       
        const json = await data.json();
        console.log(json)
        this.setState({
            userInfo:json
        })
        // console.log(userInfo)

    }

    render() {
        // console.log(this.props.name+" child render is called")
        // const{name,img,phone,address}=this.state.userInfo.users
        return (
            <div className="user-cards">
                {/* <p>Name: {this.state.userInfo.users.firstName}</p>
                <p>Location: {this.state.userInfo.users.address}</p>
                <p>Contact: {this.state.userInfo.users.phone}</p> */}


            </div>
        )
    }

}
export default UserClass