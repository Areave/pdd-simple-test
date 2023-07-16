import React from "react";
import './mainPage2.scss';
import {Types} from '../../utils/types'
import {connect} from 'react-redux'
import DescriptionComp from "../../comps/descriptionComp/descriptionComp";
import {JokeComp} from "../../comps/jokeComp/jokeComp";
import {withErrorBoundary} from "react-error-boundary";
import {Ticket} from "../../comps/ticketComp/ticket";
import {TicketTemplate} from "../../comps/ticketComp/ticketTemplate";
// import {ticketsJSON} from '../../assets/stub/tickets.json';
// import {ticketsJSON} from '../../assets/stub/';

// console.log(ticketsJSON);

const tickets = [
    [1,3,1,2,1,2,1,3,3,3],
    [1,3,2,1,3,2,2,1,2,2],
    [1,1,1,1,3,3,4,3,2,1],
    [2,3,1,3,3,2,3,2,2,3],
    [1,3,1,3,1,2,3,2,3,2],
    [3,1,1,1,3,2,4,2,2,1],
    [2,3,1,2,1,2,2,2,2,2],
    [2,3,1,3,3,1,3,2,1,2],
    [3,2,3,2,2,1,3,3,3,1],
    [3,1,1,1,3,3,4,3,3,1],

    [4,1,2,2,2,2,1,3,3,2],
    [2,3,2,3,3,3,1,1,3,2],
    [1,3,3,4,3,4,2,3,2,1],
    [2,3,1,4,3,3,4,1,4,2],
    [3,3,2,3,2,3,3,2,3,2],
    [2,2,3,2,2,2,2,1,3,3],
    [2,2,1,2,1,3,3,3,2,1],
    [2,1,2,2,3,2,4,3,2,3],
    [3,2,2,1,3,1,3,3,2,2],
    [3,1,2,3,3,3,2,1,3,3],

    [1,2,2,3,3,3,4,2,4,1],
    [3,1,1,4,3,1,3,3,2,1],
    [1,2,3,3,1,1,2,1,3,1],
    [3,1,1,3,1,1,3,1,1,2],
    [3,3,1,3,1,2,3,1,3,3],
    [1,3,1,2,1,3,1,2,4,1],
    [2,2,2,3,2,2,1,1,3,3],
    [1,2,4,2,2,3,2,2,2,2],
    [3,3,2,2,2,1,1,2,1,1],
    [2,3,2,3,3,3,1,1,1,3],

    [2,3,3,3,2,1,1,2,3,1],
    [2,1,3,1,3,3,3,3,1,3],
    [1,2,2,1,1,2,3,1,1,4],
    [3,2,3,2,1,3,1,2,3,2],
    [1,2,2,3,2,1,2,3,2,1],
    [2,3,2,3,3,3,1,2,2,4],
    [2,3,4,3,1,2,3,1,1,1],
    [1,1,3,2,3,4,2,2,2,3],
    [2,3,2,3,3,3,2,1,3,2],
    [3,4,3,4,2,1,3,2,3,3],

    [2,3,2,2,1,2,2,3,2,1],
    [3,1,3,2,3,3,2,1,2,3],
    [1,3,3,2,3,3,3,2,1,1],
    [3,1,2,2,3,3,3,3,2,3],
    [2,2,1,3,3,3,1,2,2,1],
    [1,1,1,4,4,1,2,3,1,3],
    [3,3,3,4,1,1,1,1,1,2],
    [1,2,3,2,3,4,3,2,2,4],
    [3,3,3,3,2,1,1,1,3,2],
    [3,2,3,3,3,3,3,3,3,2],
    [2,3,4,2,4,3,3,3,3,1],

    [2,3,2,2,1,2,3,3,2,2],
    [1,2,3,1,1,2,1,3,2,2],
    [1,2,1,2,1,1,2,1,3,3],
    [3,2,2,2,3,1,1,2,3,3],
    [1,2,1,3,2,3,2,3,2,1],
    [3,3,2,3,1,2,3,3,2,2],
    [3,2,2,3,3,2,3,2,2,1],
    [1,1,3,2,3,2,1,3,3,1],
    [3,2,1,2,2,2,3,1,1,3],

    [3,3,2,1,3,3,2,3,2,3],
    [2,2,4,2,3,1,3,1,2,3],
    [4,3,2,4,3,2,3,3,1,2],
    [2,2,2,2,1,2,2,2,1,1],
    [1,3,3,2,2,2,3,3,3,3],
    [2,2,2,1,2,2,2,1,2,3],
];

// const amountOfTickets = 4;
//
// const createArray = () => {
//     let ar = [];
//     for (let i = 0; i < amountOfTickets; i++) {
//         ar.push(i);
//     }
//     return ar;
// };

// const array = createArray();


document.addEventListener('keypress', function (e: any) {
    console.log(e);
    if (e.key === 'Enter') {
        // e.keyCode = 9;
        console.log('enter!');
        // @ts-ignore
        const keyboardEvent = new KeyboardEvent("keydown", { key: "Tab", code: 'Tab', keyCode: '9'});
        setTimeout(() => {
            e.target.dispatchEvent(keyboardEvent);

        }, 0);
    }
});

const MainPage2: React.FC<any> = (props) => {

    return <div className="mainPage2">
        <div className="tickets">
            {tickets.map((answers: any, index: number) => <Ticket nomer={index + 1} rightAnswers={tickets[index]}/>)}
        </div>

    </div>
};
// const mapStateToProps = (state: Types.State) => {
//     return {name: state.name, joke: state.joke, isError: state.isError}
// };

export default MainPage2;