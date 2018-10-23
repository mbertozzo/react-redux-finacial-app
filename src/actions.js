const UPDATE_INCOME = 'UPDATE_INCOME';

const updateIncome = (income) => {
  return {
    type: UPDATE_INCOME,
    income  //ES6 - same as income: income
  }
}

export default { UPDATE_INCOME, updateIncome }