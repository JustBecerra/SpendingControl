const initialState = {
  Expenses:[]    
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return{
              ...state,
              Expenses:action.payload
            }
        default:
            return state;
    }
}