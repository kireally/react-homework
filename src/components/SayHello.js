import React from 'react'

class SayHello extends React.Component {
    state = {
        loading: false,
        greeting: ''
    }

    sayHi() {
        this.setState({
            greeting: 'Hello!',
            loading: false
        })
    }

    render() {
        return(
            <div>
                <button onClick={() => {
                    setTimeout(()=> { this.sayHi()}, 3000)
                    this.setState({loading: !this.state.loading})
                }}>
                    Say Hi
                </button>
                {this.state.loading ? <div className ='loader loader-animated'></div> : <span>{this.state.greeting}</span>}    
            </div>
        )    
    }
}

export default SayHello