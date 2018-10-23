export const UPDATE_INCOME = 'UPDATE_INCOME';

export const updateIncome = (income) => {
  return {
    type: UPDATE_INCOME,
    income: income
  }
}