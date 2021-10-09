import React from 'react'
import { WrapperTwo } from './WrapperTwo'

export const WrapperOne = () => {
  const style = {
    padding: '8px',
    border: '1px solid orange',
  }

  return (
    <div style={style}>
      Wrapper One
      <WrapperTwo />
    </div>
  )
}
