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
            //   className='modalBG'
        >
         <button onClick={closeModal} className='exitButton'>X</button>
         <p>
            I've seen a lot of people focused on how much money they make, but they forget about how much they spend,<br/>
            so I created this app so people can manage their expenses better.
         </p>
        </Modal>
        
      </div>
    )
}