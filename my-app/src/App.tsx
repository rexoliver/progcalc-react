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
      <FlexItem></FlexItem>
      <div className="topbox">
        <ResultBar result={15}/>
      </div>
      <div className="board-row">
        <SymbolNum snum={"AC"}/>
        <SymbolNum snum={"+/-"}/>
        <SymbolNum snum={"%"}/>
        <SymbolNum snum={"/"}/>
      </div>
      <div className="board-row">
        <SymbolNum snum={"7"}/>
        <SymbolNum snum={"8 "}/>
        <SymbolNum snum={"9"}/>
        <SymbolNum snum={"*"}/>
      </div>
      <div className="board-row">
        <SymbolNum snum={"4"}/>
        <SymbolNum snum={"5"}/>
        <SymbolNum snum={"6"}/>
        <SymbolNum snum={"-"}/>
      </div>
      <div className="board-row">
        <SymbolNum snum={"1"}/>
        <SymbolNum snum={"2"}/>
        <SymbolNum snum={"3"}/>
        <SymbolNum snum={"+"}/>
      </div>
      <div className="board-row">
        <SymbolNum snum={"0"}/>
        <SymbolNum snum={"0"}/>
        <SymbolNum snum={"."}/>
        <SymbolNum snum={"="}/>
      </div>
    </React.Fragment>
  );
}

const SymbolNum = (props: {snum: string}) => {
  return (
    <h1 className='square'>{props.snum}</h1>
  );

}

const FlexItem = () => {
  return (
    <div className="container" id="container">
      <div>One</div>
      <div>Item two</div>
      <div>The item we will refer to as three</div>
    </div>
  );
}

const ResultBar = (props: {result: number}) => {
  return (
    <h1>{props.result}</h1>
  );
}
