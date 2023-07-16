import React, {useState} from 'react'
import './answerTemplate.scss'
import {Types} from '../../utils/types'

export const AnswerTemplate: React.FC<any> = ({rightAnswer, index}) => {

    const [isWrong, setIsWrong] = useState(false);
    const onInputChange = (event: any) => {
        const inputValue = event.target.value;

        // @ts-ignore
        setIsWrong(inputValue != rightAnswer);
        console.log('inputValue', inputValue);
        console.log('rightAnswer', rightAnswer);
        console.log('setIsWrong', inputValue !== rightAnswer);
    };
    return <div className={`answer ${isWrong ? 'wrong' : ''}`}>
        <div className="">{index + 1}</div>
        <input className={`answerInput`} onChange={onInputChange}/>
    </div>
};