import * as React from "react";
import {Types} from "../../utils/types";
import {FooterCompTemplate} from "./footerCompTemplate";
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

export const FooterComp = connect(mapStateToProps, mapDispatchToProps)(HeaderHOC(FooterCompTemplate));