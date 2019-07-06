import React from 'react';

export const MyContext = React.createContext();

export class MyProvider extends React.Component {
    state = {
    };

    incrementAge = () => {
        this.setState({age: this.state.age + 1})
    };

    render() {
        return (
            <MyContext.Provider value={{
                ...this.state,
                incrementAge: this.incrementAge
            }}>
                {this.props.children}
            </MyContext.Provider>
            )
    }
}
