import React, { Component } from 'react';
import './App.css';
import AddColorForm from './components/AddColorForm/AddColorForm2.js';
import ColorList from './components/ColorList/ColorList.js';
import HiddenMessages from './components/HiddenMessages/HiddenMessages.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            colors: [
                {
                    "id": "541",
                    "title": "Ocean Blue",
                    "color": "blue",
                    "rating": 5
                },
                {
                    "id": "542",
                    "title": "Tomato",
                    "color": "red",
                    "rating": 3
                },
                {
                    "id": "543",
                    "title": "Lawn",
                    "color": "green",
                    "rating": 4
                },
                {
                    "id": "544",
                    "title": "Party Pink",
                    "color": "pink",
                    "rating": 3
                }
            ]
        };
        this.addColor = this.addColor.bind(this);
        this.rateColor = this.rateColor.bind(this);
        this.removeColor = this.removeColor.bind(this);
    }

    addColor(title, color) {
        const colors = [
            ...this.state.colors,
            {
                id: +new Date(),
                title,
                color,
                rating: 0
            }
        ];
        this.setState({ colors });
    }

    rateColor(id, rating) {
        const colors = this.state.colors.map( color => (color.id !==id) ? color : { ...color, rating } );
        this.setState({ colors });
    }

    removeColor(id) {
        const colors = this.state.colors.filter( color => color.id !== id );
        this.setState({ colors });
    }

    render() {
    const { addColor, rateColor, removeColor } = this;
    const { colors } = this.state;
    return (
      <div className="App">
        <HiddenMessages />
        <AddColorForm onNewColor={ addColor }/>
        <ColorList colors={ colors } onRate={rateColor} onRemove={removeColor}/>
      </div>
    );
  }
}

export default App;
