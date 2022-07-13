import { useEffect, useRef, useState } from 'react'
import GameLife, {GameConfigParams, CanvasConfigParams, GameOfLife, CanvasController} from 'game-life'

interface GameLifeConfig {
    game?: GameConfigParams,
    graphics?: CanvasConfigParams
}

export const useGameLife = (defaultConfig: GameLifeConfig = {})
: [GameOfLife<CanvasController> | undefined, React.RefObject<HTMLCanvasElement>] => {
    const [gameInstance, setGameInstance] = useState<GameOfLife<CanvasController>>();
    const initialized = useRef(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {
        const {current: canvas} = canvasRef;
        
        if(canvas && !initialized.current){   
            const game = GameLife(canvas, defaultConfig || {})
            setGameInstance(game);
            initialized.current = true;
        }
    }, [])

    return [gameInstance, canvasRef]
}
