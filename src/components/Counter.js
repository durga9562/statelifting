import React,{Component} from "react";

export class Counter extends Component{
    render(){
        return(
            <div>
                <h2>counter:{this.props.counter}</h2>
                <button className="btn btn-success" onClick={this.props.increment}>Increment</button>
        <button className="btn btn-danger" onClick={this.props.decrement}>Decrement</button>
            </div>
        )
    }
}
export default Counter;