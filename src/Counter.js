import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);

        this.state = {
            number : 0,
            fixedNumber : 0
        };
    }
    render() {
        const {number, fixedNumber} = this.state;
        return (
            <div>
                <h1>{fixedNumber}</h1>
                <h1>{number}</h1>
                <button onClick={()=>{this.setState({number: number+1})}}>+1</button>
                <button onClick={()=>{this.setState({number: number-1})}}>-1</button>
            </div>
        );
    }
}

export default Counter;