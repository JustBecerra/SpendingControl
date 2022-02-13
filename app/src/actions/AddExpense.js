export async function AddExpense(input){
    return {type: "ADD_EXPENSE", payload:input}
}