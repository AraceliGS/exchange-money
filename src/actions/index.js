export const actionTypes = {
  INPUT_TEXT_CHANGED: 'INPUT_TEXT_CHANGED',
  OUTPUT_TEXT_CHANGED: 'OUTPUT_TEXT_CHANGED',
  EXCHANGE_CHANGED: 'EXCHANGE_CHANGED',
  EXCHANGE_2_CHANGED: 'EXCHANGE_2_CHANGED'
};

export const inputTextChanged = text => ({
  type: actionTypes.INPUT_TEXT_CHANGED,
  text
});

export const outputTextChanged = text => ({
  type: actionTypes.OUTPUT_TEXT_CHANGED,
  text
}); 

export const exchangeChanged = evtHappened => ({
  type: actionTypes.EXCHANGE_CHANGED,
  evtHappened
});

export const otherExchangeChanged = otherEvtHappened => ({
  type: actionTypes.EXCHANGE_2_CHANGED,
  otherEvtHappened
});