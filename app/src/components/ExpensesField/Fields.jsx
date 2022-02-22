import { useState } from 'react'
import { useSelector } from 'react-redux'
import './Fields.css'

export default function Fields(){
    let [budget,setbudget] = useState(0)

    let day = useSelector(state => state.Day)
    let expenses = useSelector(state => state.Expenses)
    let TotalExps = 0;
    for(let i=0; i < expenses.length;i++){
        TotalExps += parseInt(expenses[i].cost);
    }

    let FilteredExps = expenses.filter(ex => ex.day === day)
    return(
        <div className='bg'>
           <tr className='infoTitle'>
               <th className='categoryTitle'>type</th>
               <th className='categoryTitle'>amount</th>
               <th className='categoryTitle'>cost</th>
           </tr>
           {Array.isArray(FilteredExps) && FilteredExps.length > 0 ? FilteredExps.map(ex => <tr className='infoFeed' key={ex.cost * Math.random()}>
               <td>{ex.type ? ex.type + ' ' : ''}</td>
               <td>{ex.amount ? ex.amount + ' ' : ''}</td>
               <td>{ex.cost ? ex.cost + ' ' : ''}</td>
            </tr>) : ''}
            <div className='totalExps'>
                Total Expenses:
                ${TotalExps}<br/>
                <input type='text' placeholder='Enter your budget'></input>
                
            </div>
                       
        </div>
    )
} 