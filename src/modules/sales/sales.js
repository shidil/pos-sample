import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions';
import SalesComponent from './components/SalesComponent';

let mapStateToProps = (state) => {
  return {
    products: state.sales.products
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

const SalesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SalesComponent);

export default SalesContainer;
