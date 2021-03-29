import React from 'react'

import Question from './Question'

const questions = [
    {   
        id: 0,
        question: 'aaaaaaa?',
        answers: ['aaa', 'bbb', 'ccc'],
        correctAnswer: 'aaa'
    },
    {   
        id: 1,
        question: 'bbbbb?',
        answers: ['aaa', 'bbb', 'ccc', 'ddd'],
        correctAnswer: 'bbb'
    }
]

const Quiz = () => {
    return (
        <div className="quiz">
            <h1>Quiz</h1>
            {questions.map(item => {
                return (
                    <Question key={`${item.id}`}
                        question={item.question}
                        answers={item.answers}
                        correctAnswer={item.correctAnswer}
                     />
                )
            })}
        </div>
    )
}

export default Quiz