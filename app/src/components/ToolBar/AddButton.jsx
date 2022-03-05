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
      product:'',
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
        dispatch(await AddExpense(info))
        setInfo({
          type: '',
          product:'',
          amount: 0,
          cost: 0,
          day:'',
        })
        alert('Expense added')
        closeModal()
    }


    return(
        <div>
            <button className='AddButton' onClick={openModal}>Add</button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              ariaHideApp={false}
              className='modalBG'
            >
              <button onClick={closeModal} className='closeButton'>X</button>
              <form onSubmit={(e) => handleSubmit(e)} className='OverlayModal'>
                  <input type='text' required name='type' onChange={e => handleChange(e)} className='inputModal' placeholder='type of payment'/>
                  <input type='text' required name='product' onChange={e => handleChange(e)} className='inputModal' placeholder='product/service'/>
                  <input type='number' required name='amount' onChange={e => handleChange(e)} className='inputModal' placeholder='amount'/>
                  <input type='number' required name='cost' onChange={e => handleChange(e)} className='inputModal' placeholder='cost'/>
                  <select name='day' onChange={e => handleChange(e)} value={info.day} className='selectSt'>
                    <option hiddenValue='none' hidden>day</option>
                    <option value='Monday'>Monday</option>
                    <option value='Tuesday'>Tuesday</option>
                    <option value='Wednesday'>Wednesday</option>
                    <option value='Thursday'>Thursday</option>
                    <option value='Friday'>Friday</option>
                    <option value='Saturday'>Saturday</option>
                    <option value='Sunday'>Sunday</option>
                  </select>
                  <button className='addExpense' type='submit'>Add Expense</button>
              </form>
            </Modal>
        </div>
    )
}