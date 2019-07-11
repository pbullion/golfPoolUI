import React from 'react';
import Schedule from './Schedule';
import {MyContext} from "../../contexts/MyContext";

export default () => (
    <MyContext.Consumer>
        {({tournament, selectTournament}) => <Schedule tournament={tournament} selectTournament={selectTournament} />}
    </MyContext.Consumer>
)
