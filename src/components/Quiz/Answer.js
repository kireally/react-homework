import React, { useState } from 'react'

const Answer = ({answer, name}) => {

    const [checkedAnswer, setCheckedAnswer] = useState('')

    const onChecked = (event) => {
        setCheckedAnswer(event.target.labels[0].innerText)
        console.log(event.target.labels[0].innerText)
    }

    return (
        <div className='answer'>
            <label>
                <input onClick={onChecked} type="radio" name={`${name}`} checkedAnswer={checkedAnswer} />
                {answer}
            </label>
        </div>
    )
}

export default Answer