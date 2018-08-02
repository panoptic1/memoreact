import React, { Component } from 'react';
//import Game from './components/Game';
import GameCard from "./components/GameCard";
import Wrapper from "./components/Wrapper";
import Scoreboard from "./components/Scoreboard";
import mammals from "./mammalia.json"
import './App.css';

//const App = () => <Game />
//shuffle function for gameplay
function shuffle(a) {
    for ( let i = a.length - 1; i > 0; i-- ) {
        const j = Math.floor(Math.random() * (i+1));
        [a[i], a[j]] = [a[j], a[i]]
    }
    return a
}

class App extends Component {
    //Setting this.state.animals to the mammalia json 
    
    state = {
        mammals: mammals,
        currentScore: 0,
        highScore: 0,
        alert: "",
        clicked: []
    };

    //function to shuffle after every click
    handleShuffle = () => {
        let shuffledMammals = shuffle(this.state.mammals);
        this.setState({ mammals: shuffledMammals });
    };

    //function to handle every click
    handleClick = (id) => {
        if (this.state.clicked.indexOf(id) === -1){
            this.handleIncrement();
            this.setState({ clicked: this.state.clicked.concat(id) })
        } else {
            this.handleGameOver();
        }
    };

    //function to handle the score and alert player when they accomplish something
    handleIncrement = () => {
        const newScore = this.state.currentScore + 1;
        this.setState({
            currentScore: newScore,
            message: "YES!"
        });
        if(newScore > this.state.highScore){
            this.setState({ highScore: newScore });
            this.handleShuffle();
        } else {
            this.handleShuffle();
        }
    }
    //function to end the game when the player f*#%s up
    handleGameOver = () => {
        this.setState({
            message: "NO!",
            currentScore: 0,
            clicked: []
        })
    }
    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
        return (
            <Wrapper>
            <Scoreboard>
                <h3>Memory Game</h3>
                <h4>Mammal Edition</h4>
                <h5>Current Score = {this.state.currentScore} | High Score = {this.state.highScore}</h5>
            </Scoreboard>
            
            {this.state.mammals.map(mammal => (
            <GameCard
                //Function for when the user clicks a card-either it will increment a point, or start the game over. 
                handleClick={this.handleClick}
                id={mammal.id}
                key={mammal.id}
                name={mammal.name}
                image={mammal.image}
                clicked={mammal.clicked}
            />
            ))}
            </Wrapper>
        );
    }
}


export default App;
