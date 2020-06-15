import React from 'react'
class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
    // this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
    // this.reset = this.reset.bind(this);
  }

  increment = () => {
    // let tempState = {};
    // if(this.state.count === 12)
    //   tempState.count = 12;
    // else
    //   tempState.count = this.state.count+1;
    // this.setState(tempState);
    this.setState(state =>
      state.count !== 12
        ? {count: state.count + 1}
        : {count: state.count},
    )
  }
  decrement = () => {
    this.setState(state => ({count: state.count - 1}))
  }

  reset = () => {
    this.setState(state => ({count: 0}))
  }

  render() {
    return (
      <>
        <div className="mainCont">
          <div className="contentCont">
            <h1 className="textCenter counter">
              {this.state.count}
            </h1>
            <div className="counterBtnCont">
              <button onClick={this.increment}>
                Increment
              </button>
              <button onClick={this.decrement}>
                Decrement
              </button>
              <button onClick={this.reset}>Reset</button>
            </div>
            <p className="errMsg">
              {this.state.count === 12
                ? 'Not more than 12'
                : ''}
            </p>
          </div>
        </div>
      </>
    )
  }
}

export default Counter
