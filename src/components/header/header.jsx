import React from 'react'
import { trollFace } from '../../assets'
import './header.scss'

export const Header = () => {
  return (
    <header className='header'>
        <section className='logo-group'>
            <img src={trollFace}/>
            <h3>Meme Generator</h3>
        </section>
    </header>
  )
}
