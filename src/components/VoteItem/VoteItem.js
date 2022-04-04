import React, { useState, useEffect } from 'react';
import './VoteItem.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from '@mui/material/IconButton';

const VoteItem = ({ title, link, vote, date, voteHandler}) => {
  const [counter, setCounter] = useState(vote)
  const [currentDate, setCurrentDate] = useState(date)
  useEffect(() => {
    console.log(title, link, vote, date)
  },[title, link, vote, date])
  const incrementCounter = () => {
    setCounter(counter+1)
    voteHandler(title, true)
  }

  const decrementCounter = () => {
    if(counter>0){
      setCounter(counter-1)
      voteHandler(title, false)
    }
  }



  return (
    <li className='itempadding'>
      <div className='outerblock'>
        <div> 
          <fieldset >
          {counter}
          </fieldset>
        </div>
        <div>
          <div>
            <div>
              <h3>{title}</h3>
              <a class="padding" target="_blank" href={link}>{link}</a>
            </div>
            <div>
              <IconButton aria-label="Add" onClick={incrementCounter}>
                <ArrowUpwardIcon color='secondary' fontSize="large"/>
              </IconButton>
              <IconButton aria-label="Add" onClick={decrementCounter}>
                <ArrowDownwardIcon color='primary' fontSize="large"/>
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default VoteItem