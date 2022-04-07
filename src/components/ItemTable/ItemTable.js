
import React, {useEffect} from 'react'
import VoteItem from '../VoteItem/VoteItem'
import './ItemTable.css'

const ItemTable = ({items, voteHandler}) => {
  useEffect(()=>{
    console.log("items",items)
  },[]) 

  return (
    <div>
      <ul className='itemsstyle'>
          {
            items.map((item)=>{ return <VoteItem key={item.title} title={item.title} link={item.link} vote={item.vote} date={item.date} voteHandler={voteHandler}/>}) 
          }
      </ul>
    </div>
  )
}

export default ItemTable