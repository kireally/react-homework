import React from 'react'
import names from '../names.json'

class ArrayModification extends React.Component {

    state = {
        people : []
    }

    render() {
        return (
            <div>
                <button onClick = {() => {
                    const index = Math.floor(Math.random() * 13)
                    const newPeople = [...this.state.people, names[index]]
                    this.setState({people : newPeople})
                    
                }
                }>
                    Add name
                </button>
                {
                this.state.people.map((element,index) => {
                        return <p key={index}>{element}</p>
                    })
                }
            </div>
        )
    }
}

export default ArrayModification