import React from 'react'

class DropdownComponent extends React.Component {
    state ={
        isOpen: false
    }
    
    ingridients = [
        {name: 'pepperoni', id: 0}, 
        {name: 'anchouses', id: 1}, 
        {name: 'chesses', id: 2 }, 
        {name: 'pizzas', id: 3}
    ]


    render() {
        return (
            <div>
                <button onClick={() =>this.setState({isOpen: !this.state.isOpen})}>
                    {this.state.isOpen ? 'Close' : 'Open'}
                </button>
                { this.state.isOpen && (
                    <div>
                        {this.ingridients.map(item => {
                            return (
                                <div key={item.id}>
                                    <p>{item.name}</p>
                                    <Counter />
                                </div>
                            )
                        })}         
                    </div>
                )
                }
            </div>    
        )
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