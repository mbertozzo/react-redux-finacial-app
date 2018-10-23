import { connect } from 'react-redux';
import { updateIncome } from './../actions';
import Assumptions from './Assumptions';

const mapStateToProps = (state) => {
  return {
    assumptions: state.assumptions,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUpdateIncome: (income) => {
       dispatch(updateIncome(
         Number((income).replace(',',''))
       ))
    }
  }
}

const AssumptionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Assumptions)

export default AssumptionContainer;