import React, { Component } from 'react';

const API = 'https://rickandmortyapi.com/api/character/'

class Images extends Component {
    constructor() {
        super()
        this.state = {
            images: []
        }
    }

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ images: data.results }));
    }

    render() {

        return (
            <div className="Images">
                {this.state.images.map(image => <div><h1 className="Description">{image.name}</h1> <img alt="img" src={image.image} /></div>)}
                {console.log(this.state.images)}
            </div>
        )
    }
}



export default Images;