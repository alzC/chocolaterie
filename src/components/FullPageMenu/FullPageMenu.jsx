import React, { useEffect, useState } from 'react'
import '../../styles/FullpageMenu/fullpageMenu.css'
const FullPageMenu = ({ isOpen }) => {
    const handleMouseOver = (event) => {
        const marquee = event.currentTarget.nextSibling.nextSibling;
        const rect = event.currentTarget.getBoundingClientRect();
        marquee.style.top = `${rect.top - 10}px`;
    };

    return (
        <>
            <div className={isOpen ? 'fullPageMenu' : 'fullPageMenu toggle'}>
                <div className={isOpen ? 'left_content' : 'left_content toggle'}>

                </div>
                <div className={isOpen ? 'content_menu' : 'content_menu toggle'}>
                    <ul>
                        <li>
                            <div className="marquee_container">
                                <a className={isOpen ? '' : ' toggle'} href="#" onMouseOver={handleMouseOver}>La carte</a>
                                <img className='marquee_img' src="/assets/images/boite.jpg" alt="" />
                                <div className="marquee">
                                    <div className="marquee__inner">
                                        <span>La carte - La carte - La carte - La carte - La carte - La carte - La carte</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="marquee_container">
                                <a className={isOpen ? '' : ' toggle'} href="#" onMouseOver={handleMouseOver}>La Chocolaterie</a>
                                <img className='marquee_img' src="/assets/images/boite.jpg" alt="" />
                                <div className="marquee">
                                    <div className="marquee__inner">
                                        <span>La Chocolaterie - La Chocolaterie - La Chocolaterie - La Chocolaterie - La Chocolaterie - La Chocolaterie - La Chocolaterie</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="marquee_container">
                                <a className={isOpen ? '' : ' toggle'} href="#" onMouseOver={handleMouseOver}>Notre savoir-faire</a>
                                <img className='marquee_img' src="/assets/images/boite.jpg" alt="" />
                                <div className="marquee">
                                    <div className="marquee__inner">
                                        <span>Notre savoir-faire - Notre savoir-faire - Notre savoir-faire - Notre savoir-faire - Notre savoir-faire - Notre savoir-faire - Notre savoir-faire</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="marquee_container">
                                <a className={isOpen ? '' : ' toggle'} href="#" onMouseOver={handleMouseOver}>Offrez le Passioné</a>
                                <img className='marquee_img' src="/assets/images/boite.jpg" alt="" />
                                <div className="marquee">
                                    <div className="marquee__inner">
                                        <span>Offrez le Passioné - Offrez le Passioné - Offrez le Passioné - Offrez le Passioné - Offrez le Passioné - Offrez le Passioné - Offrez le Passioné</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="marquee_container">
                                <a className={isOpen ? '' : ' toggle'} href="#" onMouseOver={handleMouseOver}>Contactez Chokoha</a>
                                <img className='marquee_img' src="/assets/images/boite.jpg" alt="" />
                                <div className="marquee">
                                    <div className="marquee__inner">
                                        <span>Contact - Contact - Contact - Contact - Contact - Contact - Contact</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default FullPageMenu