const initialState = {
  Expenses:[]    
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            // console.log('en el reducer', typeof state.Expenses)
            return{
              ...state,
              Expenses:action.payload
            }
        default:
            return state;
    }
}