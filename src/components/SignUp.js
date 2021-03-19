import React from 'react'

class SignUp extends React.Component {
    state = {
        phone: '',
        fullName: '',
        password: '',
        passwordRepeat: '',
        error: ''
    }

    onChangeCredentials = (event, fieldName) => {
        this.setState({[fieldName]: event.target.value})
    }

    onCheckUserData = () => {
        if(this.state.phone.length !== 13 || this.state.phone[0] !== '+') {
            this.setState({error: 'Ошибка при вводе номера телефона'})
        } else if(!this.state.fullName) {
            this.setState({error: 'Ошибка при вводе имени и фамилии'})
        } else if(this.state.password.length < 8) {
            this.setState({error: 'Слишком короткий пароль'})
        } else if(this.state.password !== this.state.passwordRepeat) {
            this.setState({error: 'Пароли не совпадают'})
        } else {
            console.log('Регистрация прошла успешно');
            this.clearFields()
        }
             
    }

    clearFields = () => {
        this.setState({
            phone: '',
            fullName: '',
            password: '',
            passwordRepeat: '',
            error: ''
        })
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    placeholder='phone number'
                    value={this.state.phone}
                    onChange={(event) => this.onChangeCredentials(event, 'phone')}
                />
                <input
                    type='text'
                    placeholder='name and surname'
                    value={this.state.fullName}
                    onChange={(event) => this.onChangeCredentials(event, 'fullName')}
                />            
                <input
                    type='text'
                    placeholder='password'
                    value={this.state.password}
                    onChange={(event) => this.onChangeCredentials(event, 'password')}
                />
                <input
                    type='text'
                    placeholder='repeat password'
                    value={this.state.passwordRepeat}
                    onChange={(event) => this.onChangeCredentials(event, 'passwordRepeat')}
                />
                <button onClick={this.onCheckUserData}>Sign up</button>
                {this.state.error}
            </div>
            
        )
    }
}

export default SignUp