import React, { useContext, useState } from 'react'
import { appContext } from '../store/appContext'

export const WrapperThree = () => {
  const { dispatch } = useContext(appContext)
  const [value, setValue] = useState('')

  const style = {
    padding: '8px',
    border: '1px solid salmon',
  }

  return (
    <div style={style}>
      Wrapper Three
      <div>
        <input
          type='number'
          placeholder='Число...'
          value={value}
          onChange={(event) => {
            setValue(event.target.value)
          }}
        />
        <button
          onClick={() => {
            dispatch({ type: 'DELETE', payload: Number(value) })
          }}>
          Delete
        </button>
      </div>
    </div>
  )
}
