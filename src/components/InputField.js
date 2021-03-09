import React from 'react'

class InputField extends React.Component {
    state = {
        value: ''
    }

    onChangeText = (event) => {
        this.setState({value: event.target.value})
    }

    render() {
        return (
            <input 
                type='text' 
                value = {this.state.value}
                onChange={this.onChangeText}
            />
        )
    }
}

export default InputField