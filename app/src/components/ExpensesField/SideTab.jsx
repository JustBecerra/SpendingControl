import './SideTab.css'
import { useState, useRef, useEffect } from 'react';
import { useAlert } from 'react-alert'

export default function SideTab(props){
  let [budget,setBudget] = useState('')
  let [budgetFlag,setBudgetFlag] = useState(false);
  let [careful,setCareful] = useState(false)
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

  useEffect(() => {
    if(TotalExps > budget){
      setCareful(true)
    }else{
      setCareful(false)
    }
  },[TotalExps])

  return(
    <div className='sideTab'>
        <h2 className='totalExps'>
            Total Expenses:
             ${TotalExps}
             {/* {careful === true ? alert.show('budget is smaller than your expenses!') : ''} */}
        </h2>   
        {budgetFlag === false ?
            <div className='budget'>
              <input className='inputSt' ref={inputRef} type='text' placeholder='Enter your budget' onChange={(e) => setBudget(e.target.value)}/><br/>
              <button type='button' value={budget} className='budgetButton' onClick={() => changeFlag()} >Update Budget</button>
            </div>
        : <div className='budget'>
            <h2 className='showBudget'>Budget: ${budget} </h2><br/>
            <button className='changeBudget' onClick={() => setBudgetFlag(false)}>Change Budget</button>
        </div>}
    </div>
  )
}