import React, { Component } from 'react';
import Counter from './Counter';
import Mycomponent from './Mycomponent';

class App extends Component {
  render() {
    const name = 'react';
    return (
      <div>
        <div>{name}</div>
         {/*JSX 내부에서 변수를 호출할 때 사용하는 중괄호  */}
        <Counter></Counter>
        {/* <Mycomponent favoriteNumber={2}>이것은 칠드런</Mycomponent> */}
      </div>
    );
  }
}

export default App;