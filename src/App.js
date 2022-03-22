import './App.css';
import Die from './components/Die';
import React from 'react'

function App() {
  function allNewDice(){
    const randNums = []
    for(let i = 0; i < 10; i++){
      let rand = Math.floor( 1 + Math.random() * (6 + 1 - 1));
      randNums.push(rand)
    }

    return randNums
  }

  function rollDice(){
    setDice(allNewDice())
  }

  const [dice, setDice] = React.useState(allNewDice())
  const die = dice.map(num => <Die value={num} />)
  return ( 
    <main className="main">
        <div className='main__body'>
          {die}
        </div>
        <button className='main__button' onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
