import React from 'react';
import logo from './logo.svg';
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
        <div className="topbox">
          <ResultBar result={15}/>
        </div>
        <div className='numpad'>
          <div className='row'>
            <SymbolNum snum={"7"}/>
            <SymbolNum snum={"8 "}/>
            <SymbolNum snum={"9"}/>
          </div>
          <div className='row'>
            <SymbolNum snum={"4"}/>
            <SymbolNum snum={"5"}/>
            <SymbolNum snum={"6"}/>
          </div>
          <div className='row'>
            <SymbolNum snum={"1"}/>
            <SymbolNum snum={"2"}/>
            <SymbolNum snum={"3"}/>
          </div>  
          <div className='row'>
            <SymbolNum snum={"0"}/>
            <SymbolNum snum={"0"}/>
            <SymbolNum snum={"."}/>
          </div>
        </div>
        
        <div className="board-row">
          <SymbolNum snum={"AC"}/>
          <SymbolNum snum={"+/-"}/>
          <SymbolNum snum={"%"}/>
          <SymbolNum snum={"/"}/>
        </div>
        <div className="board-row">
          
          <SymbolNum snum={"*"}/>
        </div>
        <div className="board-row">
          
          <SymbolNum snum={"-"}/>
        </div>
        <div className="board-row">
          
          <SymbolNum snum={"+"}/>
        </div>
        <div className="board-row">
          
          <SymbolNum snum={"="}/>
        </div>
      </div>
    </React.Fragment>
  );
}

const SymbolNum = (props: {snum: string}) => {
  return (
    <h1 className='square'>{props.snum}</h1>
  );
}


const ResultBar = (props: {result: number}) => {
  return (
    <h1>{props.result}</h1>
  );
}


const GridItem = () => {
  return (
    <div className='gridcontainer' id='gridcontainer'>
      <div className='box'>Texttime</div>
    </div>
  );
}

const FlexItem = () => {
  return (
    <div className="container" id="container">
      <div className='box'>One</div>
      <div className='box'>Item two</div>
      <div className='box'>The item we will refer to as three</div>
    </div>
  );
}

