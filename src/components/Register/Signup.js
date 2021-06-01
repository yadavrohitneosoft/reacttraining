import {Component} from "react";

class Signup extends Component{
    state = (
        this.likes = 0
    )

    like = ()=>{
        setState = ({
            likes = this.likes+1
        })
    }

    render(){
        return(
            <div>
                <label>{this.state.likes}</label>
                <button onClick={this.like}></button>
            </div>
        )
    }

}