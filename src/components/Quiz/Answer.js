import React, { useState } from 'react'

const Answer = ({answer, name, onPress}) => {

    const onChecked = (event) => {
        onPress(event.target.labels[0].innerText)
    }

    return (
        <div className='answer'>
            <label>
                <input onChange={onChecked} type="radio" name={`${name}`} />
                {answer}
            </label>
        </div>
    )
}

export default Answer