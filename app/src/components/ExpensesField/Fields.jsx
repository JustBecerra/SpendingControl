import { useSelector } from 'react-redux'
import SideTab from './SideTab.jsx'
import './Fields.css'

export default function Fields(){
    let day = useSelector(state => state.Day)
    let expenses = useSelector(state => state.Expenses)    
    let FilteredExps = expenses.filter(ex => ex.day === day)

    return(
        <div className='bg'>
        <table className='tableSt'>
          <thead>
           <tr className='infoTitle'>
               <th className='categoryTitle'>type of payment</th>
               <th className='categoryTitle'>product/service</th>
               <th className='categoryTitle'>amount</th>
               <th className='categoryTitle'>cost</th>
           </tr>
          </thead>
          <tbody>
           {Array.isArray(FilteredExps) && FilteredExps.length > 0 ? FilteredExps.map(ex => <tr className='infoFeed' key={ex.cost * Math.random()}>
               <td className='type'>{ex.type ? ex.type + ' ' : ''}</td>
               <td className='product'>{ex.product ? ex.product + ' ' : ''}</td>
               <td className='amount'>{ex.amount ? ex.amount + ' ' : ''}</td>
               <td className='cost'>{ex.cost ? '$' + ex.cost + ' ' : ''}</td>
            </tr>) : ''}
          </tbody>  
        </table>
            <SideTab expenses={expenses}/>
        </div>
    )
} 