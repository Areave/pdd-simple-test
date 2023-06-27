import React from 'react'
import './navigationCompTemplate.scss'
import {Types} from '../../utils/types'
import {NavLink} from "react-router-dom";

export const NavigationCompTemplate: React.FC<Types.ComponentProps> = (props) => {
    return <div className='navigationComp'>
        <NavLink to={'/'}>main page</NavLink>
        <NavLink to={'/secondPage'}>second page</NavLink>
    </div>
};