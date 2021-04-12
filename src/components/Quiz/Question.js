import React, { useState } from 'react'

import Answer from './Answer'

const Question = ({question, answers, correctAnswer}) => {
    const [answer, setAnswer] = useState('')

    const onPress = (checked) => {
        setAnswer(checked)
    }
    
    const onCheckAnswer = () => {
        answer === correctAnswer ? console.log('Правильно') : console.log('Неправильно')
    }

    return (
        <div className="question">
            <h2>{question}</h2>
            {answers.map(item => {
                return(
                    <Answer key={`${item}`} answer={item} name={question} onPress={onPress} />
                )    
            })}
            <button onClick={onCheckAnswer}>Проверить ответ</button>
        </div>
    )
}

export default Question