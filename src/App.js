import './App.css'
import Die from './components/Die'
import React from 'react'
import {nanoid} from 'nanoid'

function App() {
  const [dice, setDice] = React.useState(allNewDice())
  function allNewDice(){
    const randNums = []
    for(let i = 0; i < 10; i++){
      let rand = Math.floor( 1 + Math.random() * (6 + 1 - 1));
      randNums.push({
        value: rand,
        isHeld:false,
        id: nanoid()})
    }

    return randNums
  }

  function rollDice(){
    setDice(prevDice => prevDice.map(die => {
      if(die.isHeld){
        return die
      } else {
        return {
          value: Math.floor( 1 + Math.random() * (6 + 1 - 1)),
          isHeld: false,
          id: nanoid()
        }
      }
    }))
  }
 
  function holdDice(id){
    setDice(prevDice => prevDice.map(die => {
      return id === die.id ? {...die, isHeld: !die.isHeld} : die
    }))
  }
  
  const die = dice.map(dieElement => 
    <Die 
      key={dieElement.id}
      value={dieElement.value}
      isHeld={dieElement.isHeld}
      id={dieElement.id}
      holdDice={holdDice} 
    />)
  return ( 
    <main className="main">
        <div className='main__body'>
          {die}
        </div>
        <button className='main__button' onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App
