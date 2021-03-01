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
          xIsNext: !this.state.xIsNext
        })
      }
      }>
        {this.state.xIsNext ? 'X' : 'V'}
      </p> 
    )
  }
}

export default YesOrNoComponent