import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HSocials from './HSocials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Osborn Edudzi Worlasi</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA />
                <HSocials />

                <div className="me">
                    <img src={ME} alt="My Image" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header