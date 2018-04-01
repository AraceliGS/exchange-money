import React from 'react';

const Exchange = ({
  inputText, outputText, firstText, secondText, 
  setInputText, setOutputText, setExchangeChanged, setExchange2Changed
}) => {
  return (
    <div>
      <div className="exchange-money-div" onClick={evt => {
        // console.log(evt.isTrusted)
        setExchangeChanged(evt.isTrusted);
      }}>
      <span>{firstText}</span>
      <input 
      value={inputText} 
      onChange={evt => {
        setInputText(evt.target.value)
      }}
      placeholder="Input"
      /></div>
      <button>Exchange</button>
      <div className="exchange-money-div" onClick={evt => {
        console.log(evt.isTrusted)
        setExchange2Changed(evt.isTrusted);
      }}>
      <span>{secondText}</span>
      <input 
      value={outputText} 
      placeholder="Output"
      onChange={evt => {
        setOutputText(evt.target.value);
      }}
      /></div>
    </div>
  )
}

export default Exchange;