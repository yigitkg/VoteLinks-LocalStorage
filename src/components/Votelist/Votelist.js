import React, {useEffect, useState} from 'react';
import './Votelist.css';
import Paginate from '../Paginate/Paginate';
import ItemTable from '../ItemTable/ItemTable';

const Votelist = () => {
  const[items, setItems] = useState()
  const[name, setName] = useState("");
  const[link, setLink] = useState("");
  let result = JSON.parse(localStorage.getItem("links"))
  useEffect(()=>{
    console.log(result)
    setItems(result)
  },[]) 

  const voteHandler = (name, isUpVote)=> {
    if(isUpVote){
      items[name].vote++
    }else{
      items[name].vote--
    }

    console.log("items",items)
    const size = Object.keys(items).length;
    const keys = Object.keys(items)
    if(size > 1){
      for(let i = size-1; i>=1; i--){
        console.log("names",keys[i])
        console.log("item properties",items[keys[i]].vote)
        if(items[keys[i]].vote >= items[keys[i-1]].vote){
          console.log("new list")
          const newItem ={
            link:"https://mui.com/",
            vote:0,
            date:new Date(),
          }
          console.log("length", localStorage.key(0))
          console.log("..", localStorage.getItem("links"))
          localStorage.removeItem("links");
          const cat = localStorage.getItem('links');
          console.log("cat",cat)
          console.log("asdasd",localStorage.getItem("qe"))
        }
      }
    }

    // localStorage.clear();
    localStorage.setItem("links", JSON.stringify(items))
  }
  return (
    <><div className='list'>
      {items && <ItemTable items={items} voteHandler={voteHandler}/>}
    </div><div className='paginate'><Paginate /></div> </>
  )
}

export default Votelist