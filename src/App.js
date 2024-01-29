import React, {Component, useState} from 'react';
import CardList from './CardList';
import SearchBox from './Searchbox';
import './App.css';
import {robots} from './robots.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots,
            searchField: ''
        }
    }
    
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }
    
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        this.state.robots = filteredRobots;
        
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={this.state.robots}/>
            </div>
        )
    }
}

export default App;