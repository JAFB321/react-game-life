import GameLife, {GameConfigParams, CanvasConfigParams, GameOfLife, CanvasController} from 'game-life'
import { useEffect, useRef, useState } from 'react'

interface GameLifeConfig {
    game?: GameConfigParams,
    graphics?: CanvasConfigParams
}

export const useGameLife = (defaultConfig: GameLifeConfig = {})
: [GameOfLife<CanvasController> | undefined, React.RefObject<HTMLCanvasElement>] => {
    const [gameInstance, setGameInstance] = useState<GameOfLife<CanvasController>>();
    const [initialized, setInitialized] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const {current: canvas} = canvasRef;

    useEffect(() => {
        if(canvas && !initialized){
            const game = GameLife(canvas, defaultConfig)
            setGameInstance(game);
            setInitialized(true);
        }
    }, [canvas])

    return [gameInstance, canvasRef]
}
