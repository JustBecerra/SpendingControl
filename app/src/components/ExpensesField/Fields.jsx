import { useSelector } from 'react-redux'
import './Fields.css'

export default function Fields(){
    let expenses = []
    expenses.push(useSelector(state => state.Expenses))
    console.log('expenses', expenses)
    return(
        <div className='bg'>
           {/* {expenses.map(ex => <div>
               {ex.type}
               {ex.amount}
               {ex.day}
           </div>)} */}
           <tr>
               <th>type</th>
               <th>amount</th>
               <th>cost</th>
               <th>day</th>
           </tr>
           {expenses.map(ex => <tr key={ex.type * Math.random()}>
               <td>{ex.type ? ex.type + ' ' : ''}</td>
               <td>{ex.amount ? ex.amount + ' ' : ''}</td>
               <td>{ex.cost ? ex.cost + ' ' : ''}</td>
               <td>{ex.day ? ex.day : ''}</td>
            </tr>)}
        </div>
    )
} 