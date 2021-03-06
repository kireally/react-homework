import React from 'react'

class Animation extends React.Component {
    state = {
        animated : false
    }

    render() {
        return (
            <div>
                <div className={this.state.animated ? 'loader loader-animated' : 'loader'}></div>
                <button onClick = {() => {
                    this.setState({animated : !this.state.animated})
                }}>
                    {this.state.animated ? 'Stop' : 'Play'}
                </button>
            </div>
        )
    }
}

export default Animation