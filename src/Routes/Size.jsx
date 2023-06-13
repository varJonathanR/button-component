import React from 'react'
import Menu from '../components/Menu'
import { SizedButtons } from '../components/Buttons'

export default function Size() {
  return (
    <div>
      <Menu />
      <div className="size">
        <h1>Sized Buttons</h1>
        <SizedButtons />
      </div>
    </div>
  )
}