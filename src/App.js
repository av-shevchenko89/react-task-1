import React from "react";

import './App.css';
import Title from "./Title";
import Search from "./Search";
import GenreToggle from "./Genre-toggle";
import Counter from "./Counter";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            searchVal: '',
            genreSelected: 'all',
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.submitSearch = this.submitSearch.bind(this);
        this.changeGenre = this.changeGenre.bind(this);
    }

    handleSearch(searchVal) {
        this.setState({ searchVal });
    }

    submitSearch() {
        console.log(this.state.searchVal);
    }

    changeGenre(genre) {
        this.setState({ genreSelected: genre });
    }

    render() {
        const { searchVal, genreSelected } = this.state;

        return (
            <div className="movies">
                <header>
                    <Title title="FIND YOUR MOVIE" />
                    <Search value={ searchVal } onChange={ this.handleSearch } onSubmit={ this.submitSearch } />
                </header>

                <main>
                    <div className="divider" />
                    <GenreToggle genreSelected={ genreSelected } onSelect={ this.changeGenre } />
                    <Counter />
                </main>
            </div>
        );
    }
}

export default App;
