import React from "react";
import {FaFacebook,FaLinkedin,FaInstagram,FaTwitter} from 'react-icons/fa'
import {Animate} from 'react-simple-animate'
import './styles.scss'

const Home = () => {
    return (
        <section className={'home'} id={'home'}>
            <div className={"home__text-wrapper"}>
                <h1>
                    Hello, I am Omid Ashouri.
                    <br/>
                    Back End Developer.
                </h1>
            </div>
            <Animate play={true} duration={1.5} delay={1} start={{transform:'translateY(600px)'}} end={{transform:'translateX(0px)'}}>
                <div className={'contact-me'}>
                    <div className={'contact-me__buttons-wrapper'}>
                        <button>Hire me</button>
                        <a>Download resume</a>
                    </div>
                    <div className={'contact-me__socials-wrapper'}>
                        <FaLinkedin size={32}/>
                        <FaFacebook size={32}/>
                        <FaTwitter size={32}/>
                        <FaInstagram size={32}/>
                    </div>
                </div>
            </Animate>
        </section>
    )
}

export default Home;