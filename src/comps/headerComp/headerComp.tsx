import * as React from "react";
import {Types} from "../../utils/types";
import {HeaderCompTemplate} from "./headerCompTemplate";
import {connect} from 'react-redux'

const HeaderHOC = (Comp: React.FC<any>): Types.HOC => {

    return (props) => {
      return <Comp {...props}/>
  }
};

const mapStateToProps = (state: Types.State) => {
    return {}
};
const mapDispatchToProps = {};

export const HeaderComp = connect(mapStateToProps, mapDispatchToProps)(HeaderHOC(HeaderCompTemplate));