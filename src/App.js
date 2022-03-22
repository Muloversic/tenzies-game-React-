import './App.css';
import Die from './components/Die';
function App() {
  return (
    <main className="main">
        <div className='main__body'>
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
        </div>
    </main>
  );
}

export default App;
