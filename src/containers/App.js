import {connect} from 'react-redux';

import AppComponent from '../components/App';

const AppWithRedux = connect(
  function mapStateToProps(state) {
    const {
      info
    } = state.AppReducer;

    return {
      data: info
    };
  }
)(AppComponent);

export default AppWithRedux;