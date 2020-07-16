import React, {Component} from 'react';
import './App.css';
import Circle from './Circle/Circle';

class App extends Component {
  state = {
    nums: [],
  };

  newNumbers = () => {
    const numbers = [];
    const fiveNum = [];
    for (let i = 1; i < 37; i++) {
      numbers.push(i)
    }

    const shuffle = (arr) => {
      arr.sort(() => Math.random() - 0.5);
    }

    shuffle(numbers);

    for (let n = 0; n < 5; n++) {
      fiveNum.push(numbers[n]);
    }

    fiveNum.sort((a, b) => {
      return a - b;
    })

    this.setState({
      nums: fiveNum,
    })
  }

  render() {
    return (
        <div className="App">
          <div className="rounds" id="rounds">
            <Circle value={this.state.nums[0]}/>
            <Circle value={this.state.nums[1]}/>
            <Circle value={this.state.nums[2]}/>
            <Circle value={this.state.nums[3]}/>
            <Circle value={this.state.nums[4]}/>
          </div>
          <div>
            <button onClick={this.newNumbers} className="btn">Try again</button>
          </div>
        </div>
    );
  }
}

export default App;


