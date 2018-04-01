import {actionTypes} from '../actions/index';

const DATA = {
  title: 'Welcome to React'
}

const INIT_STATE = {
  info: DATA,
  inputText: '',
  outputText: '',
  exchange: false
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.INPUT_TEXT_CHANGED:
      state = {
        ...state,
        inputText: action.text,
        outputText: action.text * 3.1900
      }
      break;
    case actionTypes.OUTPUT_TEXT_CHANGED:
      state = {
        ...state,
        inputText: action.text * 3.2380,
        outputText: action.text,
      }
      break;
    default:
      return state;
  }

  return state;
};