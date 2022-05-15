import React from "react";
import OmidPic from '../../pic/omidashouri.jpg';
import './header.css'
import MainTitle from "./MainTitle";
import {motion} from "framer-motion";
import Particles from "react-tsparticles";
import reactLogoBlack from './icons/react-logo-black.svg'

const Header = () => {

    const container = {
        hidden: {opacity: 1, hidden: 0},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: {y: 20, opacity: 0},
        visible: {y: 0, opacity: 1}
    }

    return (
        <>
            {/*if cannot find image, then put it in public*/}
            {/*<Particles style={{position:'absolute'}}
            params={
                {
                    particles:{
                        shape:{
                            type:'images',
                            image:{src:'reactLogoBlack'}
                        },
                        number:{
                            value:5,
                            density:{
                                enable:true,
                                value_area:800
                            }
                        },
                        opacity:{
                            value:0.2
                        },
                        polygon:{
                            nb_sides:15
                        },
                        size:{
                            value:30
                        },
                        line_linked:{
                            enable:false
                        }
                    }
                }
            }
            />*/}
            <div className={'header'}>
                <img src={OmidPic} alt={'Omid Ashouri picture'}/>
{/*                <MainTitle/>
                <motion.div variants={container} initial={'hidden'} animate={'visible'} className="icons-wrapper">
                    <div style={{display: 'flex'}}>
                        <motion.div variants={item} className="item-1 item"></motion.div>
                        <motion.div variants={item} className="item-2 item"></motion.div>
                        <motion.div variants={item} className="item-3 item"></motion.div>
                        <motion.div variants={item} className="item-4 item"></motion.div>
                        <motion.div variants={item} className="item-5 item"></motion.div>
                        <motion.div variants={item} className="item-6 item"></motion.div>
                        <motion.div variants={item} className="item-7 item"></motion.div>
                        <motion.div variants={item} className="item-8 item"></motion.div>
                    </div>
                </motion.div>*/}
            </div>
        </>
    )

}

export default Header;