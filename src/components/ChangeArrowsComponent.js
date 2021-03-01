import React from 'react'

class ChangeArrowsComponent extends React.Component {
    state = {
      currentPosition : 0
    }

    Urls= ['./arrows.png', './bold_arrows.png', './lock_arrows.png']
    
    render() {
      return (
        <img className='img' src={this.Urls[this.state.currentPosition % 3]} onClick={() => {
          this.setState({currentPosition : ++this.state.currentPosition})
        }
      }/>
      )
    }
  }

  export default ChangeArrowsComponent