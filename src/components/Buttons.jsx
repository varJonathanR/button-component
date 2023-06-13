import React from 'react'
import { Button, StartIcon, EndIcon } from './Button'

function ColorButtons() {
  return (
    <div className="color-container">
        <div className="flex">
            <Button code={"<Button />"} inText={"Default"} />
            <Button className={"hover"} code={"&:hover, &:focus"} inText={"Default"} />
        </div>
        <div className="flex">
            <Button className={"btn btn-primary"} code={"<Button />"} inText={"Primary"} />
            <Button className={"primary"} code={"&:hover, &:focus"} inText={"Primary"} />
        </div>
        <div className="flex">
            <Button className={"btn btn-secondary"} code={"<Button />"} inText={"Secondary"} />
            <Button className={"secondary"} code={"&:hover, &:focus"} inText={"Secondary"} />
        </div>
        <div className="flex">
            <Button className={"btn btn-danger"} code={"<Button />"} inText={"Danger"} />
            <Button className={"danger"} code={"&:hover, &:focus"} inText={"Danger"} />
        </div>
    </div>
  )
}

function IconButtons() {
    return (
        <div className="icon-container">
            <div className="flex">
                <StartIcon code={"<Button variant='StartIcon' />"} className={"btn btn-primary"} iName={"bi bi-cart-plus"} inText={"Default"} />
                <EndIcon code={"<Button variant='EndIcon' />"} className={"btn btn-primary"} iName={"bi bi-cart-plus"} inText={"Default"} />
            </div>
        </div>
    )
}
function SizedButtons() {
    return (
        <div className="size-container">
            <div className="flex">
                <Button code={"<Button size='sm' />"} className={"btn btn-primary btn-sm"} inText={"Default"} />
                <Button code={"<Button size='md' />"} className={"btn btn-primary"} inText={"Default"} />
                <Button code={"<Button size='lg' />"} className={"btn btn-primary btn-lg"} inText={"Default"} />
            </div>
        </div>
    )
}

export { ColorButtons, IconButtons, SizedButtons };