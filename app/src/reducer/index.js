const initialState = {
  Expenses:[],    
  Day:[]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
          return{
            ...state,
            Expenses: [...state.Expenses,action.payload]
          }
        case 'SELECT_DAY':
          return{
            ...state,
            Day: action.payload
          }
        default:
          return state;
    }
}