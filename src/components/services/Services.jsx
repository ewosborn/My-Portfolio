import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return (
        <section id = 'services'>
            <h5>My Offer</h5>
            <h2>My Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>

                    {/* UI/UX DESIGN */}

                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur n?</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur n?</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur n?</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur n?</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur n?</p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    {/* WEB DEVELOPMENT */}

                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur n?</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur n?</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur n?</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur n?</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur n?</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur n?</p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>

                    {/* CONTENT CREATION*/}

                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur n?</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur n?</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur n?</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur n?</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur n?</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services