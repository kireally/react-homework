import React from 'react'

class LoadComponent extends React.Component {
    state ={
        load: true
    }

    render() {
        if (this.state.load) {
            return (
                <button onClick={() =>
                    this.setState({load: !this.state.load})
                }>
                    Load
                </button>
            )     
        } else {
            return (
                <div className='loader loader-animated' onClick ={ () =>
                    this.setState({load: !this.state.load})
                }>
                </div>
            )
        }
    }
}

export default LoadComponent