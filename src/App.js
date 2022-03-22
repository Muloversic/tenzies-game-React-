import './App.css'
import Die from './components/Die'
import React from 'react'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

function App() {
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)
  const [newGame, setNewGame] = React.useState(false)
  React.useEffect(()=>{
    const isWon = dice.every(die => die.isHeld === true)
    const firstValue= dice[0].value
    const isAllTheSameVal = dice.every(die => die.value === firstValue)
    if(isWon && isAllTheSameVal){
      setTenzies(true)
    } 
  }, [dice])

  React.useEffect(()=>{
    setDice(allNewDice())
    setTenzies(false)
  },[newGame])

  function generateNewDie() {
    return {
        value: Math.floor( 1 + Math.random() * (6 + 1 - 1)),
        isHeld: false,
        id: nanoid()
    }
}

  function allNewDice(){
    const randNums = []
    for(let i = 0; i < 10; i++){
      randNums.push(generateNewDie())
    }

    return randNums
  }

  function rollDice(){
    setDice(prevDice => prevDice.map(die => {
      return die.isHeld ? die : generateNewDie()
    }))

    if(tenzies){
      setNewGame(true)
    }
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
        {tenzies && <Confetti />}
          <h1 className="main__title">Tenzies</h1>
            <p className="main__instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
        <div className='main__body'>
          {die}
        </div>
        <button className='main__button' onClick={rollDice}>{tenzies ? 'New game' : 'Roll'}</button>
    </main>
  )
}

export default App
