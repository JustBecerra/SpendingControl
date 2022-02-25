import './toolBar.css'
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddButton from './AddButton.jsx'
import { SelectDay } from '../../actions/DaySelectors';
import { useDispatch } from 'react-redux';

export default function ToolBar(){
  const types = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const [active, setActive] = useState(types[0]);  
  const dispatch = useDispatch()

  const Button = styled.button`
    background-color: #c8d8e4;
    color: black;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 30px;
    margin-bottom: 10px;     
    cursor: pointer;
      
    ${({ active }) =>
      active &&
    `
      opacity: 1;
      background-color: #52ab98;
      color: white;
    `}
    `
    
    const ButtonGroup = styled.div`
        display: flex;
        justify-content:space-evenly;
    `
    

    useEffect(() => {
      try{
        async function select(){
          dispatch(await SelectDay(active))
        }
        select()
        }catch(err){
          console.log(err.message)
        }
    },[active])
    
    return(
        <div className='background'>
            <header className='headerT'>Welcome to Spending Control</header>
            <AddButton />
            <ButtonGroup className='selectorB'>
            {types.map(type => (
                <Button
                key={type}
                active={active === type}
                onClick={() => setActive(type)}
                >
                  {type}
                </Button>
                ))}
            </ButtonGroup>
        </div>
    )
}