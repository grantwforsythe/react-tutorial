import React, { Component } from 'react';
import Table from './components/Table';
import Form from './components/Form';
import Api from './components/Api';

// Only want to create class components if they have their own state
class App extends Component {
    state = {
        characters: [],
    }

    render() {
        const { characters } = this.state;

        return (
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }

    removeCharacter = (index) => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }

    // Append to list of characters
    handleSubmit = (character) => {
        this.setState({
            characters: [...this.state.characters, character]
        });
    }
}

export default App;