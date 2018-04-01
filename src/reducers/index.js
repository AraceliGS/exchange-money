import {actionTypes} from '../actions/index';

const DATA = {
  title: 'Welcome to React',
  iHaveText: 'Tengo',
  iWantText: 'Quiero'
}

const INIT_STATE = {
  info: DATA,
  firstInputText: DATA.iHaveText,
  secondInputText: DATA.iWantText,
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
    case actionTypes.EXCHANGE_CHANGED:

      state = {
        ...state,
        firstInputText: state.secondInputText,
        secondInputText: state.firstInputText
      }
      break;
    default:
      return state;
  }

  return state;
};