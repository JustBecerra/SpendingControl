import { useState } from 'react'
import { useSelector } from 'react-redux'
import './Fields.css'

export default function Fields(){
    let [budget,setBudget] = useState(0)
    let [budgetFlag,setBudgetFlag] = useState(false);

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
               <th className='categoryTitle'>type of payment</th>
               <th className='categoryTitle'>product/service</th>
               <th className='categoryTitle'>amount</th>
               <th className='categoryTitle'>cost</th>
           </tr>
           {Array.isArray(FilteredExps) && FilteredExps.length > 0 ? FilteredExps.map(ex => <tr className='infoFeed' key={ex.cost * Math.random()}>
               <td className='type'>{ex.type ? ex.type + ' ' : ''}</td>
               <td className='product'>{ex.product ? ex.product + ' ' : ''}</td>
               <td className='amount'>{ex.amount ? ex.amount + ' ' : ''}</td>
               <td className='cost'>{ex.cost ? '$' + ex.cost + ' ' : ''}</td>
            </tr>) : ''}
            <div className='sideTab'>
                <div className='totalExps'>
                    Total Expenses:<br/>
                    ${TotalExps}
                </div>   
                {budgetFlag === false ?
                <div className='budget'>
                    <input type='number' placeholder='Enter your budget' onChange={(e) => setBudget(e.target.value)} /><br/>
                    <button className='budgetButton' type='button' onClick={() => setBudgetFlag(true)} >Update Budget</button>
                </div>
                : <div className='budget'>
                    Budget: ${budget}<br/>
                    <button onClick={() => setBudgetFlag(false)}>Change Budget</button>
                  </div>}
            </div>
        </div>
    )
} 