import React, { Component } from 'react';

class AnotherPerson extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>I am in a different component</h1>
                <h1>but still have access to the global state</h1>
                <h1>and {this.props.first_name} is {this.props.age}</h1>
                <h2>{this.props.something}</h2>
            </React.Fragment>
        );
    }
}

export default AnotherPerson;
