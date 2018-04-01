import {connect} from 'react-redux';

import ExchangeComponent from '../components/Exchange';

import {inputTextChanged, outputTextChanged, exchangeChanged} from '../actions/index';

const ExchangeComponentWithRedux = connect(
  function mapStateToProps(state) {
    const {
      inputText,
      outputText,
      firstInputText,
      secondInputText,
      exchange
    } = state.AppReducer;

    return {
      inputText,
      outputText,
      firstText: firstInputText,
      secondText: secondInputText,
      exchange
    };
  },

  function mapDispatchToProps(dispatch) {
    return {
      setInputText(newInputText) {
        dispatch(inputTextChanged(newInputText));
      },
      setOutputText(newOutputText) {
        dispatch(outputTextChanged(newOutputText));
      },
      setExchangeChanged(newEvent) {
        dispatch(exchangeChanged(newEvent));
      }
    };
  }
)(ExchangeComponent);

export default ExchangeComponentWithRedux;