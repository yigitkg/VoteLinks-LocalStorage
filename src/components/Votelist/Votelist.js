import React, {useEffect, useState} from 'react';
import './Votelist.css';
import Paginate from '../Paginate/Paginate';
import ItemTable from '../ItemTable/ItemTable';

const Votelist = () => {
  const[items, setItems] = useState()
  const [sort, setSort] = useState(false)
  let result = JSON.parse(localStorage.getItem("links"))
  useEffect(()=>{
    if(result){
    const sorted = sortResultsByVote(result)
    setItems(sorted)
  }
  },[]) 

  const sortResultsByVote = (array) =>{
    if(array){
      let sorted = [...array]
      sorted.sort((a,b)=> a.vote - b.vote)
      console.log("sorted",sorted)
      return sorted;
    }
    return array;
  }
  const voteHandler = (title, isUpVote)=> {
    const newItems= items.map(item=>{
      if(item.title===title){
        if(isUpVote){
          item.vote++
        }else{
          item.vote--
        }
      }
      return item;
    })
    setItems(newItems)
    if(sort){
      const sorted = sortResultsByVote(newItems)
      setItems(sorted)
    }
    localStorage.setItem("links", JSON.stringify(newItems))
  }
  return (
    <><div>
      <button onClick={()=> setSort(!sort)}>click me</button>
    </div><div className='list'>
        {items && <ItemTable items={items} voteHandler={voteHandler} />}
      </div></> 
  )
}

export default Votelist