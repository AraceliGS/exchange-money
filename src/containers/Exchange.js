import {connect} from 'react-redux';

import ExchangeComponent from '../components/Exchange';

import {inputTextChanged, outputTextChanged, exchangeChanged, otherExchangeChanged} from '../actions/index';

const ExchangeComponentWithRedux = connect(
  function mapStateToProps(state) {
    const {
      inputText,
      outputText,
      firstInputText,
      secondInputText,
      exchange,
      exchange2
    } = state.AppReducer;

    return {
      inputText,
      outputText,
      firstText: firstInputText,
      secondText: secondInputText,
      exchange,
      exchange2
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
      },
      setExchange2Changed(otherEvent) {
        dispatch(otherExchangeChanged(otherEvent));
      }
    };
  }
)(ExchangeComponent);

export default ExchangeComponentWithRedux;