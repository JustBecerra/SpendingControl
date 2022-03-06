import Modal from 'react-modal'
import React from 'react'
import './aboutButton.css'
import wonderEmoji from '../../imgs/wonderEmoji.png'

export default function AboutButton(){
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
      
    function closeModal() {
        setIsOpen(false);
    }

    return(
      <div className='aboutCont'>
        <button onClick={openModal} className='aboutButton'>
          what is this?
          <img src={wonderEmoji} className='emoji'></img>
        </button>   
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            className='aboutModal'
        >
         <button onClick={closeModal} className='exitButton'>X</button>
         <p className='paragraph'>
            I developed this tool after seeing a lot of people focused on how much money they make, but they forget about how much they spend,
            I hope this helps people manage their expenses better and make them financially responsible.
         </p>
        </Modal>
        
      </div>
    )
}