"use client";

import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import {ErrorBoundary} from "react-error-boundary";
import "./App.css";

const App = () => {
    // Declare states
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'get'
        })
        .then(response => response.json())
        .then(users => setRobots(users));
    }) 
    
    const fallbackRender = ({error, resetErrorBoundary}) => {
        <div role="alert">
            <p>Something went wrong</p>
            <pre>{error.message}</pre>
        </div>
    }

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    if(!robots.length) {
        return <h1 className="tc">Loading...</h1>
    }

    else {
        return (
            <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundary FallbackComponent={fallbackRender}>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
        )
    }
}

export default App;