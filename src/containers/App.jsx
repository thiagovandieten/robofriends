"use client";

import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    fallbackRender  = ({ error, resetErrorBoundary }) => (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
        </div>
    );
    
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }
    
    render() {
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        if (!robots.length) {
            return <h1 className="tc">Loading...</h1>
        }
        else {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary FallbackComponent={this.fallbackRender}>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        }
        
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'get'
        })
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }
}

export default App;