import React, { Component } from 'react'

class Game extends Component {
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
}