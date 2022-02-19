import './AddButton.css'
import React from 'react';
import { useDispatch} from 'react-redux'
import { AddExpense } from '../../actions/AddExpense';
import Modal from 'react-modal';

export default function AddButton(){
    const dispatch = useDispatch();
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [info,setInfo] = React.useState({
      type:'',
      amount:0,
      cost:0,
      day:'',
    })

    function openModal() {
      setIsOpen(true);
    }
    
    function closeModal() {
      setIsOpen(false);
    }
    
    function handleChange(e){
      setInfo({
        ...info,
        [e.target.name]: e.target.value
      })
    }
    
    async function handleSubmit(e){
        e.preventDefault()
        // if(!info.name || !info.amount || !info.day){
        //   setErrors(validate({
        //   ...info,
        //   [e.target.name]: e.target.value
        // }));
        // }else{
        dispatch(await AddExpense(info))
        setInfo({
          type: '',
          amount: 0,
          cost: 0,
          day:'',
        })
        alert('Expense added')
        // }
    }


    return(
        <div>
            <button className='AddButton' onClick={openModal}>+Add</button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              ariaHideApp={false}
            >
              <button onClick={closeModal}>close</button>
              <form onSubmit={(e) => handleSubmit(e)}>
                  <input type='text' name='type' onChange={e => handleChange(e)} placeholder='type of expense'/>
                  <input type='number' name='amount' onChange={e => handleChange(e)} placeholder='amount'/>
                  <input type='number' name='cost' onChange={e => handleChange(e)} placeholder='cost'/>
                  <select name='day' onChange={e => handleChange(e)} value={info.day}>
                    <option defaultValue='none' hidden>day</option>
                    <option value='Monday'>Monday</option>
                    <option value='Tuesday'>Tuesday</option>
                    <option value='Wednesday'>Wednesday</option>
                    <option value='Thursday'>Thursday</option>
                    <option value='Friday'>Friday</option>
                    <option value='Saturday'>Saturday</option>
                    <option value='Sunday'>Sunday</option>
                  </select>
                  <button type='submit'>Add Expense</button>
              </form>
            </Modal>
        </div>
    )
}