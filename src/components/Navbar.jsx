import React from 'react'
import logo from '../assets/image/logo.svg'

function Navbar() {

    const [isOpen, setIsOpen] = React.useState(false)

    const toggle = () => setIsOpen(prevState => !prevState)

    return (
        <nav className='navbar'>
            <figure className='navbar__image'>
                <img src={logo} alt="" />
            </figure>
            <div 
                className={`burguer-button ${isOpen && 'burguer-button--open'}`}
                onClick={toggle}
            >
                <span className={`burguer-button__bar`}></span>
                <span className={`burguer-button__bar`}></span>
                <span className={`burguer-button__bar`}></span>
            </div>

            <div className={`navbar__links ${isOpen && 'navbar__links--active'}`}>
                <ul className='navbar__list navbar__list--left'>
                    <li className='navbar__list-item'>Features</li>
                    <li className='navbar__list-item'>Pricing</li>
                    <li className='navbar__list-item'>Resources</li>

                </ul>
                <ul className='navbar__list navbar__list--right'>
                    <li className='navbar__list-item'>Login</li>
                    <li className='navbar__list-item navbar__list-item--highlighted'>Sign Up</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar