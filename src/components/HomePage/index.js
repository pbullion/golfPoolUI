import React from 'react';
import HomePage from './HomePage';
import {MyContext} from "../../contexts/MyContext";

export default () => (
    <MyContext.Consumer>
        {({tournament, selectTournament}) => <HomePage tournament={tournament} selectTournament={selectTournament} />}
    </MyContext.Consumer>
)
