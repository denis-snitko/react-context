import React, { useContext } from 'react'
import { WrapperThree } from './WrapperThree'
import { appContext } from '../store/appContext'

export const WrapperTwo = () => {
  const { state } = useContext(appContext)
  const style = {
    padding: '8px',
    border: '1px solid salmon',
  }

  const parseResult = state.map((item) => (
    <div style={style} key={item.id}>
      <div>{item.id}</div>
      <div>{item.name} - <a href={item.phone}>{item.phone}</a></div>
    </div>
  ))

  return (
    <div style={style}>
      Wrapper Two
      {parseResult}
      <WrapperThree />
    </div>
  )
}
