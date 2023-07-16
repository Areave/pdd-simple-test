import * as React from "react";
import {Types} from "../../utils/types";
import {AnswerTemplate} from "./answerTemplate";

const AnswerHOC = (Comp: React.FC<any>, props: any) => {

      return <Comp {...props}/>

};

export const Answer = (props: any) => AnswerHOC(AnswerTemplate, props);