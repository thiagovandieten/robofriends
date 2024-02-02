import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './Searchbox';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
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
        
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        )
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