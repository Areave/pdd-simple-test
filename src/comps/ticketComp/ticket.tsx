import * as React from "react";
import {Types} from "../../utils/types";
import {TicketTemplate} from "./ticketTemplate";

const TicketHOC = (Comp: React.FC<any>, props: any) => {

    // return () => {
      return <Comp {...props}/>
  // }
};

export const Ticket = (props: any) => TicketHOC(TicketTemplate, props);