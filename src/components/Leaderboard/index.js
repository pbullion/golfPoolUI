import React from 'react';
import Leaderboard from './Leaderboard';
import {MyContext} from "../../contexts/MyContext";

export default () => (
    <MyContext.Consumer>
        {({tournament}) => <Leaderboard tournament={tournament} />}
    </MyContext.Consumer>
)
