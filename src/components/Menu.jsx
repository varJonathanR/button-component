import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <ul className='menu'>
        <li>
            <a href="https://devchallenges.io/" target="_blank" rel="noopener noreferrer">
                <span>Dev</span>challenges.io
            </a>
        </li>
        <li>
            <Link to={"/"}>All</Link>
        </li>
        <li>
            <Link to={"/colors"}>Colors</Link>
        </li>
        <li>
            <Link to={"/icon"}>Icon</Link>
        </li>
        <li>
            <Link to={"/size"}>Size</Link>
        </li>
      </ul>
  )
}