import UPDATE_INCOME from './../actions'

const initialAssumptionsState = {
  income: 0
}

const assumptionsReducer = (
  state = initialAssumptionsState,
  action
) => {
  switch(action.type){
    case UPDATE_INCOME:
      return {
        ...state,
        income: action.income
      }
    default:
      return state
  }
}

export {assumptionsReducer}