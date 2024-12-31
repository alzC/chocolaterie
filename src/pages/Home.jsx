import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import '../styles/Home/home.css'
import { motion, useAnimation } from "framer-motion"
import TextAnimation from '../components/TextAnimation/TextAnimation'

const Home = () => {
    const controls = useAnimation();
    const containerRef = useRef(null);
    const galleryRef = useRef(null);
    const words = [' BAR À', ' CHOCOLAT', 'PASSIONNÉ', 'À', 'SALON'];
    const [maxScrollValue, setMaxScrollValue] = useState(0);
    const [mouseXPosition, setMouseXPosition] = useState(0);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        // Nettoyer lors du démontage du composant
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const cardVariants = {
        offscreen: {
            height: 0
        },
        onscreen: {
            height: windowSize.width > 992 ? "1400px" : "800px",
            transition: {
                delay: 0.2,
                duration: 0.5,
                ease: "linear"
            }
        }
    };
    const reveal = {
        hidden: {
            height: 0,

        },
        visible: {
            height: 600,
            transition: {
                delay: 0.2,
                duration: 0.5,
                ease: "linear"
            },

        }
    };
    useEffect(() => {
        if (containerRef.current && galleryRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const galleryWidth = galleryRef.current.offsetWidth;
            const scrollValue = galleryWidth - containerWidth;

            setMaxScrollValue(scrollValue);
        }
        const containerWidth = containerRef.current.offsetWidth;
        const percentage = mouseXPosition / containerWidth;

        controls.start({
            x: -maxScrollValue * percentage,
            transition: { duration: 0.3, ease: "linear" },
        });
    }, [mouseXPosition, maxScrollValue, controls]);




    const handleMouseMove = (event) => {

        const mouseX = event.clientX - containerRef.current.getBoundingClientRect().left;
        setMouseXPosition(mouseX);

    };

    return (
        <div>
            <Navbar />
            <Header />
            <div className="home">
                <section className="one">
                    <div className="one_left">
                        <TextAnimation words={words} />
                        <div className="heading_left">
                            <div className="branding_left">
                                <img src="/assets/images/lezard.svg" height={80} alt="" />
                                <div className="logo">
                                    <img height={30} src="/assets/images/logo.svg" alt="" />
                                    <p>bar à chocolat fondu & glace trempée</p>
                                </div>
                            </div>
                            <h2>Dans notre bar à chocolat, c'est vous qui décidez ! </h2>
                            <div className="heading_content">
                                Nous vous proposons au sein de notre boutique de réaliser une fondue party que ce soit entre amis, entre collègues ou avec votre famille.
                            </div>
                            <div className="heading_content">
                                La fondue est un plaisir de partage et de gourmandise, un moment à la fois gourmand, ludique et festif.
                                Vous pourrez ainsi enrober des chocolats, des marshmallows, des fruits (banane, fraise, kiwi ...), des biscuits pour la plus grande satisfaction de vos papilles.
                            </div>
                            <div className="heading_content">
                                Le chocolat est mis à fondre dans un plat à fondue, les fruits sont coupés en morceaux, il ne reste plus qu’à se régaler !
                            </div>

                        </div>
                        <div className="footing_left">
                            <a href="/" className='card'>
                                <img src="assets/icons/elegant_arrow.svg" alt="" height={28} />
                                <p>Découvrir la carte</p></a>
                            <motion.div
                                viewport={{ once: true, amount: 0.4 }}

                                variants={reveal}
                                initial={"hidden"}
                                whileInView={"visible"}
                                className="dessert">
                            </motion.div>
                        </div>
                    </div>
                    <div className="one_right">
                        <div className='content_reveal' style={{ height: windowSize.width > 992 ? "1400px" : "800px" }}>
                            <motion.img
                                viewport={{ once: true, amount: 0.2 }}
                                initial={cardVariants.offscreen}
                                whileInView={cardVariants.onscreen}
                                src="/assets/images/intro.jpeg" alt=""
                                className='entree_reveal' />
                        </div>
                        <div

                            className="footing_right">
                            <motion.div className="coordonees"
                                viewport={{ once: true, amount: 0.8 }}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delaym: 0.2,
                                    duration: 0.5,
                                    ease: "linear"
                                }}>
                                <p>42 Rue Moulin d'Isnard, 13300 SALON-DE-PROVENCE</p>
                                <p> Ouvert : Mardi 14h-18h30    Mercredi au dimanche 10h-18h30</p>
                                <p> contactez nous par mail à l'adresse suivante : contact@chokoa.fr </p>
                            </motion.div>
                            <a href="" className='card'>
                                <img src="assets/icons/elegant_arrow.svg" alt="" height={28} />
                                <p>Privatisez votre bar</p></a>
                        </div>
                    </div>
                </section>
                <section className='two'>
                    <div className="heading_carte">
                        <span></span>
                        <h2>La Carte</h2>
                        <span></span>
                    </div>
                    <div className="carte">
                        <div className="carte_container">
                            <div className="content_carte">
                                <p>Les glaces trempées sont une alchimie de diverses saveurs alliant des textures et des goûts très variés. La glace est trempée dans du chocolat fondu et, au contact du froid, le chocolat devient croquant.</p>
                                <p>Dans notre bar à chocolat, vous retrouverez le chocolat sous toutes ses formes et travaillé de toutes les manières.
                                    Chocolat chaud, fondu, glaces trempées dans une cuve de chocolat ainsi que des fondues de chocolat. </p>
                            </div>
                            <a href="/" className='card'>
                                <img src="assets/icons/elegant_arrow.svg" alt="" height={28} />
                                <p>Voir la Carte</p></a>
                        </div>
                    </div>
                </section>
                <section className="three">
                    <div className="heading_about">
                        <span></span>
                        <h2>Qui Somme-nous</h2>
                        <span></span>
                    </div>
                    <div className="about">
                        <div className="about_container">
                            <div className="content_about">
                                <p className='slogan'><strong>un instant détente autour d’une fondue party dans les <span> Bouches-du-Rhône</span> </strong></p>
                                <p>Dans notre bar à chocolat, vous retrouverez le chocolat sous toutes ses formes et travaillé de toutes les manières.
                                    Chocolat chaud, fondu, glaces trempées dans une cuve de chocolat ainsi que des fondues de chocolat. Vous choisissez votre chocolat ainsi que la façon dont vous souhaitez le consommer; en nappage, glaçage, trempage, boissons ou en fondues. Qu’il soit noir, blanc ou au lait, le chocolat sait répondre aux envies de tous les gourmands </p>
                            </div>
                            <div className="banner_about">
                                <div className="content_banner_about">
                                    <p>Chokoa est un concept unique importé du Québec, c’est l’un des seuls en France.

                                        Nous avons ouvert notre Bar à chocolat fondu & glace trempée le 6 novembre 2021 pour vous faire découvrir l’univers du chocolat.</p>
                                    <p>Venez déguster un petit déjeuner Chököa ou vous régaler avec nos glaces trempées dans des cuves de chocolats, seul, entre amis ou en famille.</p>
                                </div>
                                <div className="img_banner_about">
                                    <div className="img_banner"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="four" ref={containerRef}
                    onMouseMove={handleMouseMove}
                >
                    <motion.div className="galery"
                        ref={galleryRef}
                        animate={controls}

                        style={{ display: 'flex', overflow: 'hidden' }}>
                        <div className="card_img"><img src="assets/images/waffle.jpg" height={500} alt="" /></div>
                        <div className="card_img"><img src="assets/images/fondue.jpg" height={500} alt="" /></div>
                        <div className="card_img"><img src="assets/images/banana.jpg" height={500} alt="" /></div>
                        <div className="card_img"><img src="assets/images/choco.jpg" height={500} width={500} alt="" /></div>
                    </motion.div>
                </section>
                <div className="five">
                    <div className="heading_chocolaterie">
                        <h2>Le Bar a Chocolat</h2>
                        <div className="content_heading">
                            <p>C’est un concept tout nouveau importé du Québec autour du chocolat. Le logo de Chokoa est symbolisé par un gecko, ce petit lézard à la robe rappelant les motifs aztèques, les premiers amateurs de chocolat de l’histoire.

                                Dans notre bar à chocolat, vous retrouverez le chocolat sous toutes ses formes et travaillé de toutes les manières.
                                Chocolat chaud, fondu, glaces trempées dans une cuve de chocolat ainsi que des fondues de chocolat. </p>
                        </div>
                        <a href="/" className='card'>
                            <img src="assets/icons/elegant_arrow.svg" alt="" height={28} />
                            <p>Découvrez le Bar</p>
                        </a>
                    </div>
                    <div className="content_chocolaterie">
                        <div className="overlay">

                            <p>Vous avez la possibilité de privatiser le bar à chocolat Chokoa , que ce soit pour un petit déjeuner d’entreprise, pour un anniversaire ou tout autre événement de votre choix, nous vous accompagnons et mettons tout en œuvre pour vous faire passer un moment plaisant.
                                Dans un espace confortable et agréable, vous pourrez travailler en réunion avec vos collègues ou vivre une expérience différente entre amis.</p>
                        </div>
                    </div>
                    <div className="footing_chocolaterie">
                        <img src="assets/images/coin.jpg" height={549} width={661} alt="" />
                    </div>
                </div>
                <div className="footer">
                    <div className="logo">
                        <img height={100} src="/assets/images/logo.svg" alt="" />
                        <p>bar à chocolat fondu & glace trempée</p>
                    </div>
                    <hr />
                    <div className="contact">
                        <p> 04 42 11 93 94</p>
                        <p> 42 Rue Moulin d'Isnard, 13300 SALON-DE-PROVENCE</p>
                        <p>Mardi 14h-18h30    Mercredi au dimanche 10h-18h30</p>
                        <div className="sociaux">
                            <img src="assets/icons/fb.svg" alt="" />
                            <img src="assets/icons/insta.svg" alt="" />
                        </div>
                    </div>
                    <hr />
                    <div className="mentions">
                        <a href="/">Mentions légales</a>
                        <a href="/">Politique de confidentialité</a>
                        <a href="/">Plan du site</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home