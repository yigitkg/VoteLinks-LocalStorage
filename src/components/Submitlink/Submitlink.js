import React from 'react';
import './Submitlink.css';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useNavigate } from 'react-router-dom';

const Submitlink = () => {
  let navigate = useNavigate();

  return (
    <div className='submitbutton'>
      <IconButton aria-label="Add" onClick={()=> {navigate('/addlink')}}>
        <AddBoxIcon color='action' fontSize="large"/>
      </IconButton>SUBMIT A LINK
    </div>

  )
}

export default Submitlink