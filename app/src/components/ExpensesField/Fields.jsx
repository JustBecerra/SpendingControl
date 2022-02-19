import { useSelector } from 'react-redux'
import './Fields.css'

export default function Fields(){
    // let expenses = []
    let expenses = useSelector(state => state.Expenses)
    console.log('expenses', expenses)
    return(
        <div className='bg'>
           <tr>
               <th>type</th>
               <th>amount</th>
               <th>cost</th>
               <th>day</th>
           </tr>
           {/* {expenses.map(ex => <tr key={ex.amount * Math.random()}> */}
               {/* <td>{ex.type ? ex.type + ' ' : ''}</td>
               <td>{ex.amount ? ex.amount + ' ' : ''}</td>
               <td>{ex.cost ? ex.cost + ' ' : ''}</td>
               <td>{ex.day ? ex.day : ''}</td> */}
            {/* </tr>)} */}   
            <tr>
               <td>{expenses.type ? expenses.type + ' ' : ''}</td>
               <td>{expenses.amount ? expenses.amount + ' ' : ''}</td>
               <td>{expenses.cost ? expenses.cost + ' ' : ''}</td>
               <td>{expenses.day ? expenses.day : ''}</td>
            </tr>
            
        </div>
    )
} 