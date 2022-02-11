import './toolBar.css'
import React, { useState } from 'react';
import styled from 'styled-components';

export default function ToolBar(){
    
    const Button = styled.button`
      background-color: #c8d8e4;
      color: #2b6777;
      font-size: 20px;
      padding: 10px 20px;
      border-radius: 5px;
      margin-top: 30px;
      margin-bottom: 10px;     
      cursor: pointer;
    `
    const ButtonGroup = styled.div`
        display: flex;
        justify-content:space-evenly;
    `

    return(
        <div className='background'>
            <header className='headerT'>Welcome to Spending Control</header>
            <button className='addButton'>Add</button>
            <ButtonGroup>
                <Button>Monday</Button>
                <Button>Tuesday</Button>
                <Button>Wednesday</Button>
                <Button>Thursday</Button>
                <Button>Friday</Button>
                <Button>Saturday</Button>
                <Button>Sunday</Button>
            </ButtonGroup>
        </div>
    )
}