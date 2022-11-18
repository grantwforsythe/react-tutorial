import React, { Component } from "react";

const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*';

class Api extends Component {
    state = {
        data: [],
    }

    // This method is a React lifecycle method
    // A lifecyle method changes the order in which React methods are called
    // Mounting refers to an item being inserted into the DOM
    componentDidMount() {
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                this.setState({
                    data: result,
                });
            })
            .catch((error) => console.error(error));

    }

    render() {
        const { data } = this.state;

        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>
        });

        return <ul>{result}</ul>;
    }
}

export default Api;