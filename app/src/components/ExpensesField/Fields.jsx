import { useSelector } from 'react-redux'
import './Fields.css'

export default function Fields(){
    let expenses = useSelector(state => state.Expenses)
    console.log(expenses)
    return(
        <div className='bg'>
           {/* {expenses.map(ex => <div>
               {ex.type}
               {ex.amount}
               {ex.day}
           </div>)} */}
           {expenses.type}
           {expenses.amount}
           {expenses.day}
        </div>
    )
} 