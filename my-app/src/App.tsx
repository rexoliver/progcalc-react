import React from 'react';
import './App.css';

/*export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default function CalcWindow(){
  
  return (
    <React.Fragment>
      <div className='gridcontainer'>
        <div className='row'>
          <div className="topbox">
            <ResultBar result={15}/>
          </div>
        </div>  
        <div className="row">
          <SymbolNum snum={"AC"}/>
          <SymbolNum snum={"+/-"}/>
          <SymbolNum snum={"%"}/>
          <SymbolNum snum={"/"}/>
        </div>
        <div className='row'>
          <SymbolNum snum={"7"}/>
          <SymbolNum snum={"8"}/>
          <SymbolNum snum={"9"}/>
          <SymbolNum snum={"*"}/>
        </div>
        <div className='row'>
          <SymbolNum snum={"4"}/>
          <SymbolNum snum={"5"}/>
          <SymbolNum snum={"6"}/>
          <SymbolNum snum={"-"}/>
        </div>
        <div className='row'>
          <SymbolNum snum={"1"}/>
          <SymbolNum snum={"2"}/>
          <SymbolNum snum={"3"}/>
          <SymbolNum snum={"+"}/>
        </div>  
        <div className='row'>
          <BigSymbolNum snum={'0'}/>
          <SymbolNum snum={'.'}/>
          <SymbolNum snum={"="}/>
        </div>
      </div>
    </React.Fragment>
  );
}

const SymbolNum = (props: {snum: string}) => {
  return (
    <button className='square'>{props.snum}</button>
  );
}

const BigSymbolNum = (props: {snum: string}) => {
  return (
    <button className='bigsquare'>{props.snum}</button>
  );
}

const ResultBar = (props: {result: number}) => {
  return (
    <button className='topbox'>{props.result}</button>
  );
}


