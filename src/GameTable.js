import GameTableCell from './GameTableCell'

const GameTable = ({table, playGame}) => {

  return (

    <table className='main__table'>

      <tbody className='main__tbody'>

        <tr className='main__tr'>

        {table.map((tableCell) => {

            return (

                <GameTableCell

                  key={tableCell.id}
                  id={tableCell.id}
                  value={tableCell.value}
                  playGame={playGame}
                    
                ></GameTableCell>
            )

        })}

        </tr>

      </tbody>

    </table>

  )

}

export default GameTable
