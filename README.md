Simple react hook to create amazing game of life automats.

### Install 🐱‍💻
```bash
npm i react-game-life
```

### Basic usage 💡
```javascript
import React from 'react'
import {useGameLife} from 'react-game-life'

export default function App() {
    
    const [game, canvasRef] = useGameLife();
    
    return (
        <canvas ref={canvasRef}>
        </canvas>
    )
}
```
##### Result:
![Game life dark demo](https://raw.githubusercontent.com/JAFB321/JAFB321/main/game-life-dark.gif)

##### How to use
- Drag to explore the board
- Double click to spawn/kill cells
- Mouse wheel to zoom in/out
- Enter to start/pause evolution
- +/- keys to speed up/down

##### You can also pass default config
```javascript
import React from 'react'
import {useGameLife} from 'react-game-life'

export default function App() {
    
    const [game, canvasRef] = useGameLife({
      game: {delay: 100},
      graphics: {
        colors: {background: "#FFF", cell: "0E0E0E"},
        board: {height: 800, width: 1200}
      }
    });

    return (
        <canvas ref={canvasRef}>
        </canvas>
    )
}
```
##### Result:
![Game life white demo](https://raw.githubusercontent.com/JAFB321/JAFB321/main/game-life-white.gif)

### To manually interact/customize the game just add 🤖:
```javascript
useEffect(() => {
    game.bornCell({x: 10, t: 10}) // Spawn cell
    game.killCell({x: 10, y: 10}) // Kill cell
    game.startEvolution()         // Start 
    game.stopEvolution()          // Stop
    game.speedUp(1.5)             // Speed up 1.5x
    game.speedDown(0.8)           // Speed down 0.8x
    game.graphics.setConfig({     // Change graphics config
        colors: {background: '#F0F0F0', cell: '#000000'}
    })
    // and more
}, [])
```
You can use the <code>game</code> object where you want to call it's methods (The useEffect is optional, you can use the game inside a simple function)

##### Game API  🚀
[Game life repository](https://github.com/JAFB321/game-life)
