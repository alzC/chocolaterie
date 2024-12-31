import React, { useEffect, useRef, useState } from 'react'
import '../../styles/Navbar/navbar.css'
import MenuToggle from '../MenuToggle/MenuToggle'
import FullPageMenu from '../FullPageMenu/FullPageMenu'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
//chokoanpm
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    const [changeBackground, setchangeBackground] = useState(false);
    const scrolY = () => setchangeBackground(window.scrollY > 40);

    useEffect(() => {
        window.addEventListener("scroll", scrolY);

        return () => window.removeEventListener("scroll", scrolY);
    }, [changeBackground, scrolY]);
    return (
        <motion.nav className={changeBackground ? 'scrolling' : ""}>
            <FullPageMenu isOpen={isOpen} />
            <div className="header_booking">
                <ul>
                    <li><a href="#">Réservation</a></li>
                    <li><a href="#">Offrez un Coffret</a></li>
                </ul>
            </div>
            <div className="site_branding" style={{ transform: changeBackground ? "scale(0.7)" : "scale(1)", top: changeBackground ? "20px" : "38px" }}>
                <img src="./assets/images/logo.png" width={200} height={60} alt="" />
            </div>
            <aside>
                <p>FR <span>{">"}</span></p>
                <div className='menu'>
                    <p>Menu</p>
                    <MenuToggle handleClick={handleClick} />
                </div>
            </aside>
        </motion.nav>
    )
}

export default Navbar