import React from 'react';


class YesOrNoComponent extends React.Component {
  state = {
    xIsNext: true,
    currentValue: 'V'
  }

  render() {
    return (
      <p onClick={() => {
        this.setState({
          xIsNext: !this.state.xIsNext,
          currentValue: this.state.xIsNext ? 'X' : 'V'
        })
      }
      }>
        {this.state.currentValue}
      </p> 
    )
  }
}

export default YesOrNoComponent