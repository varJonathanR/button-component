import React from 'react'
import Menu from '../components/Menu'
import { ColorButtons } from '../components/Buttons'

export default function Colors() {
  return (
    <>
      <Menu />
      <div className="colored">
        <h1>Colored Buttons</h1>
        <ColorButtons />
      </div>
    </>
  )
}