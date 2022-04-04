
import React, {useEffect} from 'react'
import VoteItem from '../VoteItem/VoteItem'
import './ItemTable.css'

const ItemTable = ({items, voteHandler}) => {

  return (
    <div>
      <ul className='itemsstyle'>
          {
            Object.keys(items).map((item)=>{ return <VoteItem title={item} link={items[item].link} vote={items[item].vote} date={items[item].date} voteHandler={voteHandler}/>}) 
          }
      </ul>
    </div>
  )
}

export default ItemTable