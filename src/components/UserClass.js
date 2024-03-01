import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userInfo:{
                name:'default',
                location:'default'
            }
        }
    }
    async componentDidMount(){
       const data =await fetch('https://api.github.com/users/akshaymarch7');
       const json = await data.json()
                                                                      //updation of the component
       this.setState({
        userInfo:json
       })
    }
    render(){
        const {name,location}=this.state.userInfo

        return(
            <div className="usercard">
            <h2>Name:{name}</h2>
            <h3>Loaction:{location}</h3>
            <h4>Contact:</h4> 
            </div>
            )
            
    }
}
export default UserClass