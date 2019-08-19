import React from 'react';
import AnotherPerson from './AnotherPerson';
import {MyContext} from "../../contexts/MyContext";

export default (props) => (
    <MyContext.Consumer>
        {({first_name, age}) => <AnotherPerson first_name={first_name} age={age} {...props}/>}
    </MyContext.Consumer>
)
