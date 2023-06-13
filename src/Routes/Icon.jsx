import React from 'react'
import Menu from '../components/Menu'
import { IconButtons } from '../components/Buttons'

export default function Icon() {
  return (
    <div>
      <Menu />
      <div className="icon">
        <h1>Buttons with Icons</h1>
        <IconButtons />
      </div>
    </div>
  )
}