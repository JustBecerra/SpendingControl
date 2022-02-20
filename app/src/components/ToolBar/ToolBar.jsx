import './toolBar.css'
import React, { useState } from 'react';
import styled from 'styled-components';
import AddButton from './AddButton.jsx'
import { SelectMonday, SelectTuesday, SelectWednesday, SelectThursday, SelectFriday, SelectSaturday, SelectSunday } from '../../actions/DaySelectors';


export default function ToolBar(){
    
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

    // let changeDay = (type) => {
    //   try{
    //     setActive(type)
    //   }catch(err){
    //     console.log(err.message)
    //   }
      
    //   switch(active){
    //     case 'Monday':
    //       SelectMonday()
    //       break
    //     case 'Tuesday':
    //       SelectTuesday()
    //       break
    //     case 'Wednesday':
    //       SelectWednesday()
    //       break
    //     case 'Thursday':
    //       SelectThursday()
    //       break
    //     case 'Friday':
    //       SelectFriday()
    //       break
    //     case 'Saturday':
    //       SelectSaturday()
    //       break
    //     case 'Sunday':
    //       SelectSunday()
    //       break
    //     default:
    //       SelectMonday()
    //       break
    //   }
    // }

    const types = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const [active, setActive] = useState(types[0]);
    return(
        <div className='background'>
            <header className='headerT'>Welcome to Spending Control</header>
            <AddButton />
            <ButtonGroup>
            {types.map(type => (
                <Button
                key={type}
                active={active === type}
                onClick={() => setActive(type)}
                // onClick={(type) => changeDay(type)}
                >
                  {type}
                </Button>
                ))}
            </ButtonGroup>
        </div>
    )
}