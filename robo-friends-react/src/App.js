import React from "react";
import { robots } from './robots'
import CardList from './CardList'
import SearchBox from './SearchBox'
import './App.css';
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.cypress.io/todos/').then(
            response => {
                return response.json();
            }
        ).then(users => {
            console.log(users);
            this.setState({ robots: users })
        })
    }

    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value
        })
    }

    render() {
        const filterdRobots = this.state.robots.filter(robot => {
            return robot.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1 className="tc">Loading</h1>
        } else {
            console.log(filterdRobots);
            return (
                <div className="tc">
                    <h1 className="f1">Robot Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <CardList robots={filterdRobots} />
                </div>
            );
        }
    }
};

export default App;