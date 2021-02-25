import React from 'react'

class ItalicTextComponent extends React.Component {
    state = {
      italic: false
    }
  
    render() {
      return (
        <p className={ this.state.italic && 'italic' } 
           onClick = {() =>
            this.setState({italic : !this.state.italic})
           }>
          Lorem Ipsum
        </p>
      )
    }
  }

export default ItalicTextComponent