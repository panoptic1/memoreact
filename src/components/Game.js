import React, { Component } from 'react'
import GameCard from "../components/GameCard";
import Wrapper from "../components/Wrapper";
import Scoreboard from "../components/Scoreboard";
import mammals from "../mammalia.json"


class Game extends Component {
    //Setting this.state.animals to the mammalia json array
    state = {
        mammals,
        currentScore:0,
        highScore:0
    };

    //handleClick function will check whether or not the card has been clicked
    handleClick = () => {
        console.log("Level 1 Accessed")
        //if clicked=false current score will increment by 1 and the cards will shuffle
        if (this.clicked === false){
            console.log("Level 2 Accessed")
            this.setState({ currentScore : this.state.currentScore + 1})
        }
        //if clicked=true current score will be checked against highScore.
            //if currentScore at the end of the game is > than highScore, then it is the new highScore
            //values reset to original state

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
/*class Game extends Component {
    state = {
        score: 0,
        topScore: 10,
    }

    handleClick = () => {
      return 'Hi I was clicked'
    }

    render () {
        const images = ['image urls', 'image urls']
        return (
            <div>
                { images.map( image => {
                    <Gamecard imageUrl={ image } handleClick={ this.handleClick } />
                })}
            </div>
        )
    }
}*/

export default Game;