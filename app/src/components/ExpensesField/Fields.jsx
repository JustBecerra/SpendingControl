import { useSelector } from 'react-redux'
import './Fields.css'

export default function Fields(){
    let day = useSelector(state => state.Day)
    let expenses = useSelector(state => state.Expenses).filter(ex => ex.day === day)
    return(
        <div className='bg'>
           <tr className='infolist'>
               <th>type</th>
               <th>amount</th>
               <th>cost</th>
           </tr>
           {Array.isArray(expenses) && expenses.length > 0 ? expenses.map(ex => <tr className='infolist' key={ex.cost * Math.random()}>
               <td>{ex.type ? ex.type + ' ' : ''}</td>
               <td>{ex.amount ? ex.amount + ' ' : ''}</td>
               <td>{ex.cost ? ex.cost + ' ' : ''}</td>
            </tr>) : ''}             
        </div>
    )
} 