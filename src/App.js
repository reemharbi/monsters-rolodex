import React, { Component } from 'react';
import './App.css';
import './components/card-list/cardList';
import { CardList } from './components/card-list/cardList';
import { SearchBox } from './components/search-box/searchBox';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchInput: ''
        };
    }

    //
    componentDidMount() {
        // Javascript native fetch to make an API request
        fetch('https://jsonplaceholder.typicode.com/users')
            // fetch returns a promise which gives us
            // the actual body of the response which we will
            // turn into a json file so javascript can
            // understand and use it
            .then((response) => response.json())
            // make another promise
            // then take the users we got from the response
            // and set our monsters array to that
            // .then(users => console.log(users))
            .then((users) => this.setState({ monsters: users }));
    }

    handleChange = (e) => {
        this.setState({
            searchInput: e.target.value
        });
    };

    render() {
        const { monsters, searchInput } = this.state;
        const filteredMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchInput.toLowerCase())
        );

        return (
            <div className='App'>
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    placeholder='Search Monsters'
                    handleChange={this.handleChange}
                />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}
