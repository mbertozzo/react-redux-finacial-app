import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './components/App'
import Landing from './components/Landing'
import WhatIs from './components/WhatIs'
import Assumptions from './components/Assumptions'
import Expenses from './components/Expenses'
import SavingsPlan from './components/SavingsPlan'

export default(
   <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        <Route path="what-is-a-rainy-day-fund" component={WhatIs} />
        <Route path="assumptions" component={Assumptions} />
        <Route path="expenses" component={Expenses} />
        <Route path="savings-plan" component={SavingsPlan} />
      </Route>
   </Router>
)