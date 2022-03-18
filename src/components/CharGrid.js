import React from 'react'
import CharItem from './CharItem'
import Spinner from './Spinner'

const CharGrid = ({ items , isLoading }) => {
  return isLoading ? (<Spinner />) : (
    <section className='cards'>
      {items.map(item => (
        <CharItem key={item.char_id} item={item}></CharItem>
      ))}
    </section>
  )
}

export default CharGrid