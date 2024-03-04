
import UserContext from "../utils/Usercontxt"
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
              <div>
                loggedinUser
                <UserContext.Consumer>
                    {({loggedinUser}) =>(
                       <h1 className="text-xl font-bold">{loggedinUser}</h1>
                    )}
                </UserContext.Consumer>
              </div>
              <h2>This is namaste REact</h2>
              <UserContext.Consumer>
                    {({UserNumber}) =>(
                       <h1 className="text-xl font-bold">{UserNumber}</h1>
                    )}
                </UserContext.Consumer>
              <UserClass name={'sahu'} loctaon={'hyd'}/>
            </div>
        )
    }
}
export default About