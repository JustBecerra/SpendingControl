import './AddButton.css'
import React from 'react';
import { useDispatch} from 'react-redux'
import { AddExpense } from '../../actions/AddExpense';
import Modal from 'react-modal';

export default function AddButton(){
    const dispatch = useDispatch();
    const [modalIsOpen, setIsOpen] = React.useState(false);
    
    function openModal() {
        setIsOpen(true);
    }
    
    function closeModal() {
        setIsOpen(false);
    }

    // function addAlert(){
    //   dispatch(await AddExpense())
    // }

    return(
        <div>
            <button className='AddButton' onClick={openModal}>+Add</button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
            >
              <button onClick={closeModal}>close</button>
              <form>
                  <input type='text' placeholder='name of expense'/>
                  <input type='number' placeholder='amount'/>
                  <select>
                      <option>Monday</option>
                      <option>Tuesday</option>
                      <option>Wednesday</option>
                      <option>Thursday</option>
                      <option>Friday</option>
                      <option>Saturday</option>
                      <option>Sunday</option>
                  </select>
              </form>
            </Modal>
        </div>
    )
}