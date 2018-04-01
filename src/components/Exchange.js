import React from 'react';

const Exchange = ({
  inputText, outputText, firstText,
  secondText, setInputText, setOutputText, setExchangeChanged
}) => {
  return (
    <div>
      <div className="exchange-money-div">
      <span>{firstText}</span>
      <input 
      value={inputText} 
      onChange={evt => {
        setInputText(evt.target.value)
      }}
      placeholder="Input"
      /></div>
      <button onClick={evt => {
        // console.log(evt.isTrusted)
        setExchangeChanged(evt.isTrusted);
      }}>Exchange</button>
      <div className="exchange-money-div">
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