const initialState = {
  Expenses:[]    
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
          return{
            ...state,
            Expenses: [...state.Expenses,action.payload]
          }
        case 'SELECT_MONDAY':
          let filtradosM = state.Expenses.filter(ex => ex.day === 'Monday')
          return{
            ...state,
            Expenses:filtradosM
          }
        case 'SELECT_TUESDAY':
          let filtradosTU = state.Expenses.filter(ex => ex.day === 'Tuesday')
          return{
            ...state,
            Expenses:filtradosTU
          }
        case 'SELECT_WEDNESDAY':
          let filtradosW = state.Expenses.filter(ex => ex.day === 'Wednesday')
          return{
            ...state,
            Expenses:filtradosW
          }
        case 'SELECT_THURSDAY':
          let filtradosTH = state.Expenses.filter(ex => ex.day === 'Thursday')
          return{
            ...state,
            Expenses:filtradosTH
          }
        case 'SELECT_FRIDAY':
          let filtradosF = state.Expenses.filter(ex => ex.day === 'Friday')
          return{
            ...state,
            Expenses:filtradosF
          }
        case 'SELECT_SATURDAY':
          let filtradosSA = state.Expenses.filter(ex => ex.day === 'Saturday')
          return{
            ...state,
            Expenses:filtradosSA
          }
        case 'SELECT_SUNDAY':
          let filtradosSU = state.Expenses.filter(ex => ex.day === 'Sunday')
          return{
            ...state,
            Expenses:filtradosSU
          }
        default:
          return state;
    }
}