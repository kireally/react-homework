import React from 'react'

class DropdownComponent extends React.Component {
    state ={
        isOpen: false
    }
    
    ingridients = ['pepperoni', 'anchouses', 'chesses', 'pizzas']


    render() {
        return  this.state.isOpen ? (
            <div>
                <button onClick = { () => {
                    this.setState({isOpen : !this.state.isOpen})     
                }
                }>
                    Close
                </button>
                    <ul>
                        {this.ingridients.map((item) => <li>
                            {item}
                        <Counter defaultNumber={0} />
                        </li>)} 
                    </ul>
            </div>
        ) : <button onClick = { () => {
            this.setState({isOpen : !this.state.isOpen})     
        }
        }>
            Open
        </button>
    }
}

class Counter extends React.Component {
    state = {
        number: this.props.defaultNumber,
    }
    
    plus = () => {
        this.setState({ number: this.state.number + 1});
      }
    
    minus = () => {
        this.setState({ number: this.state.number - 1});
      }
    
    render () {
        return (
            <div>
                <button onClick={this.minus}>-</button>
                    {this.state.number}
                <button onClick={this.plus}>+</button>
            </div>
        );
      
    }
}

export default DropdownComponent