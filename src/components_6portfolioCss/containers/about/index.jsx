import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import {BsInfoCircleFill} from 'react-icons/bs'
import {personalData} from "./utils";
import {DiApple, DiAndroid} from 'react-icons/di'
import {FaDev, FaDatabase} from 'react-icons/fa'
import './styles.scss'

const About = () => {
    return (
        <section className={'about'} id={'about'}>
            <PageHeaderContent
                headerText={'About Me'}
                icon={<BsInfoCircleFill size={40}/>}
            />
            <div className={'about__content'}>
                <div className={'about__content__personalWrapper'}>
                    <h3 className={'developerContent'}>BackEnd Developer</h3>
                    <p>Job Profile</p>
                    <h3 className={'personalContent'}>Personal Information</h3>
                    <ul>
                        {
                            personalData.map((item, key) => (
                                    <li key={key}>
                                        <span className={'title'}>{item.label}</span>
                                        <span className={'value'}>{item.value}</span>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>
                <div className={'about__content__servicesWrapper'}>
                    <div className={'about__content__servicesWrapper__innerContent'}>
                        <div>
                            <DiApple size={60} color={'var(--selected-theme-main-color)'}/>
                        </div>
                        <div>
                            <FaDatabase size={60} color={'var(--selected-theme-main-color)'}/>
                        </div>
                        <div>
                            <DiAndroid size={60} color={'var(--selected-theme-main-color)'}/>
                        </div>
                        <div>
                            <FaDev size={60} color={'var(--selected-theme-main-color)'}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;