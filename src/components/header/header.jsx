import React from 'react'
import { trollFace } from '../../assets'
import './header.scss'

export const Header = () => {
  return (
    <header className='header'>
        <section className='logo-group'>
            <img src={trollFace}/>
            <h2>Meme Generator</h2>
        </section>
    </header>
  )
}
