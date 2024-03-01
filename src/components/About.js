
import User from "./User"
import UserClass from "./UserClass"
import { Component } from "react"

class About extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){

    }
    render(){
        return(
            <div>
              <h1>About Cass component</h1>
              <h2>This is namaste REact</h2>
              <UserClass name={'sahu'} loctaon={'hyd'}/>
            </div>
        )
    }
}
export default About