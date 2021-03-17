import axios from 'axios'
import React from 'react'

class LoginPage extends React.Component {

    state = {
        phone: '',
        password: ''
    }

    onLogin = async () => {
        const response = await axios.post('http://localhost:3001/auth/sign-in', {
            phone: this.state.phone,
            password: this.state.password

        })
        console.log(response.data)
    }

    onChangeCredentials = (event, fieldName) => {
        this.setState({[fieldName]: event.target.value})
    }

    render() {
        return (
            <div className='App'>
                <input
                    type='text'
                    placeholder='phone number'
                    onChange={(event) => this.onChangeCredentials(event, 'phone')}
                    value={this.state.phone}
                />
                <input
                    type='text'
                    placeholder='password'
                    onChange={(event) => this.onChangeCredentials(event, 'password')}
                    value={this.state.password}
                />
                <button onClick={this.onLogin}>Sign in</button>                
            </div>
        )
    }

}


export default LoginPage