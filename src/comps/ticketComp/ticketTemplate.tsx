import React from 'react'
import './ticketTemplate.scss'
import {Types} from '../../utils/types'
import {Answer} from "../answerComp/answer";

export const TicketTemplate: React.FC<any> = ({nomer, rightAnswers}) => {
    if ((nomer + '').length === 1) {
        nomer = '0' + nomer;
    }
    return <div className='ticket'>
        <div className='ticketNumber'>#{nomer}</div>
        {
            rightAnswers.map((rightAnswer: number, index: number) => <Answer rightAnswer={rightAnswer} index={index}/>)
        }
    </div>
};