import React from 'react'

class CountComponent extends React.Component {
    state = {
        number : 0
    }

    plus = () => {
        this.setState({ number: this.state.number + 1});
    }
    
    minus = () => {
        this.setState({ number: this.state.number - 1});
    }

    render() {
        return (
            <React.StrictMode>

                <ButtonComponent label='plus' onClick={this.plus} />
                {this.state.number}
                <ButtonComponent label='minus' onClick={this.minus} />

            </React.StrictMode>
        )
    }
}

class ButtonComponent extends React.Component {
    render() {
        return (
            <button onClick = {this.props.onClick}>
                {this.props.label}
            </button>
        )
    }
}

export default CountComponent