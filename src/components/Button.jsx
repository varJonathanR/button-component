import React from 'react'

function Button({ code, className, inText, disabled }) {
  return (
    <div className='button-container'>
        <p>{code}</p>
        <button type='button' className={className} disabled={disabled}>{inText}</button>
    </div>
  )
}

function StartIcon({ code, className, inText, iName }) {
  return (
    <div className='button-container'>
        <p>{code}</p>
        <button className={className}><i className={iName}></i> {inText}</button>
    </div>
  )
}

function EndIcon({ code, className, inText, iName }) {
  return (
    <div className='button-container'>
        <p>{code}</p>
        <button className={className}>{inText} <i className={iName}></i></button>
    </div>
  )
}

export { Button, StartIcon, EndIcon }