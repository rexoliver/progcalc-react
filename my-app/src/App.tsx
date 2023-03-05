import React from 'react';
import './App.css';
import {useState} from 'react';

export default function CalcWindow(){
  
  const [output, setOutput] = useState("0");
  const [build_equation, setBuild_equation] = useState("0");

  function handleNumClick(num: string){
    setOutput("0");
    if (build_equation === "0"){
      setBuild_equation(num);
    } else {
      setBuild_equation(build_equation + num);
    }
    
    console.log("clicked " + num)
  }

  function handleEqualsClick(){
    const num_output = eval(build_equation);
    if (isNaN(num_output)){
      setOutput("0")
    } else {
      setOutput(num_output);
    }
    setBuild_equation(output);

    console.log("To string " + num_output.toString());
    console.log("Output: " + output);
    console.log("Num_output: " + num_output);
    console.log("IsNan? " + isNaN(num_output));
    setOutput("0");
  }

  function handleSymbolClick(symbol: string){
    setOutput("0");
    setBuild_equation(build_equation + symbol);
  }

  function handleClearClick(){
    setOutput("1");
    setBuild_equation("0");
  }

  return (
    <React.Fragment>
      <div className='gridcontainer'>
        <div className='row'>
          <div className="topbox">
            <ResultBar value={build_equation} />
          </div>
        </div>  
        <div className="row">
          <SymbolNum value={"AC"} onSymbolNumClick={() => handleClearClick()}/>
          <SymbolNum value={"+/-"} onSymbolNumClick={() => handleSymbolClick("-")}/>
          <SymbolNum value={"%"} onSymbolNumClick={() => handleSymbolClick("%")}/>
          <SymbolNum value={"/"} onSymbolNumClick={() => handleSymbolClick("/")}/>
        </div>
        <div className='row'>
          <SymbolNum value={"7"} onSymbolNumClick={() => handleNumClick("7")}/>
          <SymbolNum value={"8"} onSymbolNumClick={() => handleNumClick("8")}/>
          <SymbolNum value={"9"} onSymbolNumClick={() => handleNumClick("9")}/>
          <SymbolNum value={"*"} onSymbolNumClick={() => handleNumClick("*")}/>
        </div>
        <div className='row'>
          <SymbolNum value={"4"} onSymbolNumClick={() => handleNumClick("4")}/>
          <SymbolNum value={"5"} onSymbolNumClick={() => handleNumClick("5")}/>
          <SymbolNum value={"6"} onSymbolNumClick={() => handleNumClick("6")}/>
          <SymbolNum value={"-"} onSymbolNumClick={() => handleNumClick("-")}/>
        </div>
        <div className='row'>
          <SymbolNum value={"1"} onSymbolNumClick={() => handleNumClick("1")}/>
          <SymbolNum value={"2"} onSymbolNumClick={() => handleNumClick("2")}/>
          <SymbolNum value={"3"} onSymbolNumClick={() => handleNumClick("3")}/>
          <SymbolNum value={"+"} onSymbolNumClick={() => handleNumClick("+")}/>
        </div>  
        <div className='row'>
          <BigSymbolNum value={'0'} onBigSymbolNumClick={() => handleNumClick("0")}/>
          <SymbolNum value={'.'} onSymbolNumClick={() => handleNumClick(".")}/>
          <SymbolNum value={"="} onSymbolNumClick={() => handleEqualsClick()}/>
        </div>
      </div>
    </React.Fragment>
  );
}



const SymbolNum = (props: {value: string, onSymbolNumClick: () => void}) => {

  return (
    <button className='square' onClick={() => props.onSymbolNumClick()}>{props.value}</button>
  );
}

const BigSymbolNum = (props: {value: string, onBigSymbolNumClick: () => void}) => {

  return (
    <button className='bigsquare' onClick={() => props.onBigSymbolNumClick()}>{props.value}</button>
  );
}

const ResultBar = (props: {value: string}) => {
  return (
    <button className='topbox'>{props.value}</button>
  );
}

