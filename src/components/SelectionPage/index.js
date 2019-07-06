import React from 'react';
import SelectionPage from './SelectionPage';
import {MyContext} from "../../contexts/MyContext";

export default () => (
    <MyContext.Consumer>
        {() => <SelectionPage />}
    </MyContext.Consumer>
)
