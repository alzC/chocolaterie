import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../../styles/Header/header.css'


const Header = () => {
    return (
        <header>

            <div className="heading">
                <div className='horizon_scrolling animated-text'>une passion francaise sublimée   une passion francaise sublimée   une passion francaise sublimée   une passion francaise sublimée   une passion francaise sublimée   une passion francaise sublimée   une passion francaise sublimée   une passion francaise sublimée   une passion francaise sublimée</div>

                <video className='banner' src="./assets/vids/choco3.mov" autoPlay muted loop></video>
            </div>
        </header>
    )
}

export default Header

