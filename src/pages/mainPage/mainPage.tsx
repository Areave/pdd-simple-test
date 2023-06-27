import React from "react";
import './mainPage.scss';
import {Types} from '../../utils/types'
import {connect} from 'react-redux'
import DescriptionComp from "../../comps/descriptionComp/descriptionComp";
import {JokeComp} from "../../comps/jokeComp/jokeComp";



const MainPage: React.FC<any> = (props) => {
    return <div className="mainPage">
            <DescriptionComp/>
            <JokeComp/>
    </div>
};
const mapStateToProps = (state: Types.State) => {
    return {name: state.name, joke: state.joke, isError: state.isError}
};

export default connect(mapStateToProps)(MainPage);