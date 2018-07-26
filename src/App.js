import React, { Component } from 'react';
//import Game from './components/Game';
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Scoreboard from "./components/Scoreboard";
import mammals from "./mammalia.json"
import './App.css';

//const App = () => <Game />
let currentScore = 0
let highScore = 0

class App extends Component {
    //Setting this.state.animals to the mammalia json array
    state = {
        mammals
    };

    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
        return (
            <Wrapper>
            <Scoreboard>
                <h3>Memory Game</h3>
                <h4>Mammal Edition</h4>
                <h5>Current Score = {currentScore} | High Score = {highScore}</h5>
            </Scoreboard>
            
            {this.state.mammals.map(mammal => (
            <GameCard
                //Function for when the user clicks a card-either it will increment a point, or start the game over. 
                //clickCard={this.clickCard}
                id={mammal.id}
                key={mammal.id}
                name={mammal.name}
                image={mammal.image}
            />
            ))}
            </Wrapper>
        );
    }
}

export default App;
