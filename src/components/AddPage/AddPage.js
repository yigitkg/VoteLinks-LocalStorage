import React, {useState} from 'react';
import './AddPage.css';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const AddPage = () => {
  const[name, setName] = useState("");
  const[link, setLink] = useState("");
  let navigate = useNavigate();
  const saveToStorage = () => {
    console.log(name, link)
    let items = JSON.parse(localStorage.getItem("links"))
    if(!items){
      items={};
    }
    const newItem ={
      link,
      vote:0,
      date:new Date(),
    }
    if(name.length >0 && isValidUrl(newItem.link)){
      items[name] = newItem
      localStorage.setItem("links", JSON.stringify(items));
    }
  }
  function isValidUrl(_string) {
    let url_string; 
    try {
      url_string = new URL(_string);
    } catch (_) {
      return false;  
    }
    return url_string.protocol === "http:" || url_string.protocol === "https:" ;
  }

  return (
    <div className='backbutton'>
      <div className='returnhome'> 
        <IconButton aria-label="Add" onClick={()=> {navigate('/')}}>
          <ArrowBackIcon color='action' fontSize="large"/>
        </IconButton>
        <div className='extrapadding'>Return to List</div>
      </div>
      <div className='extrapadding'>Add New Link</div>
      <div className='extrapadding'><TextField onChange={(e)=>{ setName(e.target.value)}} id="outlined-basic" label="Link Name:" variant="outlined" placeholder='e.g. Alphabet'/></div>
      <div className='extrapadding'><TextField onChange={(e)=>{ setLink(e.target.value)}} id="outlined-basic" label="Link URL:" variant="outlined" placeholder='e.g. http://abc.xyz'/></div>
      <div className='addbutton'>
        <Button size="large" variant="contained" onClick={()=> {saveToStorage(); navigate('/')}}>ADD</Button>
      </div>
    </div>
    

  )
}

export default AddPage