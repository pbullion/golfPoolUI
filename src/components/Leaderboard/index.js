import React from 'react';
import Leaderboard from './Leaderboard';
import {MyContext} from "../../contexts/MyContext";

export default () => (
    <MyContext.Consumer>
        {() => <Leaderboard />}
    </MyContext.Consumer>
)
