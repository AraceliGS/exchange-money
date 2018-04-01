import React from 'react';

const Exchange = ({
  inputText, outputText, exchange,
  setInputText, setOutputText, setExchangeChanged
}) => {
  return (
    <div>
      <input 
      value={inputText} 
      onChange={evt => {
        setInputText(evt.target.value)
      }}
      placeholder="Input"
      />
      <button onClick={evt => {
        // console.log(evt.isTrusted)
        setExchangeChanged(evt.isTrusted);
      }}>Exchange</button>
      <input 
      value={outputText} 
      placeholder="Output"
      onChange={evt => {
        setOutputText(evt.target.value);
      }}
      />
    </div>
  )
}

export default Exchange;