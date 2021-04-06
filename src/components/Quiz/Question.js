import React, { useState } from 'react'

import Answer from './Answer'

const Question = ({question, answers, correctAnswer, checkedAnswer}) => {
    // const [checkedAnswer1, setCheckedAnswer1] = useState(checkedAnswer)

    const onCheckAnswer = () => {
        console.log(123);
    }

    return (
        <div className="question">
            <h2>{question}</h2>
            {answers.map(item => {
                return(
                    <Answer key={`${item}`} answer={item} name={question} />
                )    
            })}
            <button onClick={onCheckAnswer}>Проверить ответ</button>
        </div>
    )
}

// const Quiz = () => {
//     return (
//         <div>
//             <h1>Quiz</h1>
//             {questions.map(item => {
//                 return (
//                     <div>
//                         <h2>{item.question}</h2>
//                         {item.answers.map(elem => {
//                             return (
//                                 <p>{elem}</p>
//                             )
//                         })}
//                     </div>
//                 )
//             })}
//         </div>
        
//     )
// }

export default Question