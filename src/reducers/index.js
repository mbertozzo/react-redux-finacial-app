import { combineReducers } from 'redux';

import { assumptionsReducer } from './reducers';

const appReducer = combineReducers({
  assumptions: assumptionsReducer
})

export default appReducer;