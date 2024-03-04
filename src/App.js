import { useState } from "react";
import GameTable from "./GameTable";
import GameInfo from "./GameInfo";


function App() {

  let score = (JSON.parse(localStorage.getItem('score')) || { X: 0, O: 0, draws: 0 });

  const [table, setTable] = useState([
    {
      id: 1,
      value: ''
    },
    {
      id: 2,
      value: ''
    },
    {
      id: 3,
      value: ''
    },
    {
      id: 4,
      value: ''
    },
    {
      id: 5,
      value: ''
    },
    {
      id: 6,
      value: ''
    },
    {
      id: 7,
      value: ''
    },
    {
      id: 8,
      value: ''
    },
    {
      id: 9,
      value: ''
    },
  ])
  const [turn, setTurn] = useState('X');
  const [result, setResult] = useState('');

  const playGame = (id) => {

    if (table[id - 1].value || result) return;

    const newTable = table.map((ele) => ele.id === id ? { ...ele, value: turn } : ele);
    setTable(newTable);

    let gameOver = false;

    for (let i = 0; i < table.length / 3; i++){
      if (
        newTable[i*3].value && newTable[i*3].value === newTable[(i*3)+1].value && newTable[(i*3)+1].value === newTable[(i*3)+2].value ||
        newTable[i].value && newTable[i].value === newTable[i+3].value && newTable[i+3].value === newTable[i+6].value
      ) {
        gameOver = true;
        break;
      }   
    }

    if (
      newTable[8].value && newTable[0].value === newTable[4].value && newTable[4].value === newTable[8].value ||
      newTable[6].value && newTable[2].value === newTable[4].value && newTable[4].value === newTable[6].value
    ) {
      gameOver = true;
    }

    if (gameOver) {

      setResult(newTable[id - 1].value)
      score[newTable[id - 1].value]++;

    } else {

      let markedCells = 0;

      newTable.map((ele) => {
        if (ele.value) markedCells++;
      });

      if (markedCells === table.length) {
        setResult('d');
        score.draws++
      }

    }

    const newTurn = turn === 'X' ? 'O' : 'X';
    setTurn(newTurn);
    localStorage.setItem('score', JSON.stringify(score));

  }

  const playAgain = () => {
    const emptyTable = table.map((ele) => ({ ...ele, value: '' }))
    setTable(emptyTable);
    setResult('');
  }

  return (

    <div className="App">

      <header className="header">
        <h1 className="header__h1">Tic-Tac Toe</h1>
      </header>

      <main className="main">

        <GameTable
          table={table}
          setTable={setTable}
          playGame={playGame}
        ></GameTable>

        <GameInfo
          score={score}
          turn={turn}
          result={result}
          playAgain={playAgain}
        ></GameInfo>

      </main>

    </div>

  );

}

export default App;
