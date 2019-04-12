import React from 'react'
import EasyBoard from './easy-board/EasyBoard'
import ModerateBoard from './moderate-board/ModerateBoard';
export default function Board(props) {
  return props.roundNumber <= 5 ? (
      <EasyBoard {...props}/>
  )
  : 
    <ModerateBoard {...props}/>
}