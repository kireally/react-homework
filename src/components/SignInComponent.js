import React from 'react'

class SignInComponent extends React.Component {
    state = {
        isSignedIn: true
    }

    changeState = () => {
        this.setState({isSignedIn : !this.state.isSignedIn})
    }

    render() {
        if(this.state.isSignedIn) { 
            return (
                <button 
                    onClick={() => {
                        setTimeout(this.changeState, 3000)
                    }
                }>
                    Sign In
                </button>
            )    
        } else {
            return (
                <p>Hello user</p>
            )
        }
    }
}

export default SignInComponent