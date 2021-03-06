import React from 'react'
import data from '../data.json'

class LoopingOutComponents extends React.Component {
    constructor() {
        super()
        this.data = data
    }
    render() {
        return (
                this.data.map((element, index) => {
                   return (
                     <div className='card-container' key={index}>
                         <h3>{element.name.first}</h3>
                         <h4>{element.name.last}</h4>
                     </div>  
                   ) 
                })
        )
    }
}

export default LoopingOutComponents