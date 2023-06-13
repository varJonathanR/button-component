import React from 'react'
/* import { Outlet } from 'react-router-dom' */
import { Button } from '../components/Button'
import Menu from '../components/Menu'
import { ColorButtons, IconButtons, SizedButtons } from '../components/Buttons'

export default function All() {
  return (
    <>
      <Menu />
      <div className='all'>
        <h1>All Buttons</h1>
        <p>Use className to set variants, example: className="outline"</p>
        <div className="all-container">
          <div className="flex">
            <Button code={"<Button />"} inText={"Default"} />
            <Button className={"hover"} code={"&:hover, &:focus"} inText={"Default"} />
          </div>
          <div className="flex">
            <Button className={"btn btn-outline-primary"} code={"<Button variant='outline' />"} inText={"Default"} />
            <Button className={"outline-hover"} code={"&:hover, &:focus"} inText={"Default"} />
          </div>
          <div className="flex">
            <Button className={"text"} code={"<Button variant='text' />"} inText={"Default"} />
            <Button className={"text-hover"} code={"&:hover, &:focus"} inText={"Default"} />
          </div>
          <div className="flex">
            <Button className={"btn btn-primary"} code={"<Button disableShadow />"} inText={"Default"} disabled={"true"} />
            <Button code={"<Button disabled />"} inText={"Default"} disabled={"true"} />
            <Button className={"text"} code={"<Button variant='text' disabled />"} inText={"Default"} disabled={"true"} />
          </div>
        </div>
        <IconButtons />
        <SizedButtons />
        <ColorButtons />
      </div>
    </>
  )
}
