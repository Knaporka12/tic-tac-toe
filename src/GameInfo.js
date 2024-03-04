
const GameInfo = ({score, turn, result, playAgain}) => {

    const handlePlayAgain  = () => {
        playAgain();
    }


    return (

    <article className='main__article'>

        {!result && <p className="main__para">Player <span className='turn'>{turn}</span> turn</p>}

        {result && result !== 'd' &&

            <div className="main__container--result">
                <p className="main__para">Player <span className='turn'>{result}</span> won!</p>
                <button className='main__btn' onClick={handlePlayAgain}>Play Again</button>
            </div>

        }

        {result === 'd' && 

            <div className="main__container--result">
                <p className="main__para"><span className='turn'>Draw!</span></p>
                <button className='main__btn' onClick={handlePlayAgain}>Play Again</button>
            </div>
        }

        <p className="main__para--score">All-time Score:

            <span>Player X: {score.playerX}</span>
            <span>Player O: {score.playerO}</span>
            <span>Draws: {score.draws}</span>

        </p>

    </article>

    )

    }

export default GameInfo
