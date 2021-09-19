import React from "react";
import { robots } from './robots'
import CardList from './CardList'
import SearchBox from './SearchBox'
import './App.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: '',
        }
    }

    onSearchChange = (event)=> {
        this.setState({
            searchfield: event.target.value
        })
    }

    render() {
        const filterdRobots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log(filterdRobots);
        return (
            <div className="tc">
                <h1 className="f1">Robot Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filterdRobots} />
            </div>
        );
    }
};

export default App;