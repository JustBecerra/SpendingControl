import './SideTab.css'
import { useState, useRef } from 'react';
import { useAlert } from 'react-alert'

export default function SideTab(props){
  let [budget,setBudget] = useState('')
  let [budgetFlag,setBudgetFlag] = useState(false);
  let [invalid,setInvalid] = useState(false)
  const inputRef = useRef('')
  const alert = useAlert()
  let TotalExps = 0;
  for(let i=0; i < props.expenses.length;i++){
    TotalExps += parseInt(props.expenses[i].cost);
  }
  
  let changeFlag = () => {
    console.log(inputRef.current.value)
    if(inputRef.current.value === ''){
      // setInvalid(true)
      alert.show('invalid value')
    }else{
      setBudgetFlag(true)
    }
  }

  return(
    <div className='sideTab'>
        <div className='totalExps'>
            Total Expenses:<br/>
             ${TotalExps}
        </div>   
        {budgetFlag === false ?
            <div className='budget'>
              <input ref={inputRef} type='text' placeholder='Enter your budget' onChange={(e) => setBudget(e.target.value)}/><br/>
              {/* {invalid === true ? <h4 className='invalidSt'>Invalid value</h4> : ''} */}
              <button type='button' value={budget} className='budgetButton' onClick={() => changeFlag()} >Update Budget</button>
            </div>
        : <div className='budget'>
            Budget: ${budget}<br/>
            <button onClick={() => setBudgetFlag(false)}>Change Budget</button>
        </div>}
    </div>
  )
}