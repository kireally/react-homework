import React from 'react'

class SquareComponent extends React.Component {
    render() {
      return (
        <div className={this.props.cssClass}>
          {this.props.label}
        </div>
      )
    }
  }

export default SquareComponent