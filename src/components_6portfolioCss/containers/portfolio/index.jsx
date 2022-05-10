import React from "react";
import ImageOne from '../../images/1.jpeg';
import ImageTwo from '../../images/2.jpeg';
import ImageThree from '../../images/3.jpeg';
import ImageFour from '../../images/4.jpeg';
import ImageFive from '../../images/5.jpeg';
import PageHeaderContent from "../../components/pageHeaderContent";
import {AiFillProject} from 'react-icons/ai'
import {filterOptions, portfolioData} from "./utils";


const Portfolio = () => {
    return (
        <section id={'portfolio'} className={'portfolio'}>
            <PageHeaderContent headerText={'My Portfolio'} icon={<AiFillProject size={40}/>}/>
            <div className={'portfolio__content'}>
                <ul className={'portfolio__content__filter'}>
                    {
                        filterOptions.map((option) =>
                            (
                                <li key={option.id}>{option.label}</li>
                            )
                        )
                    }
                </ul>
                <div className={'portfolio__content__cards'}>
                    {
                        portfolioData.map((item,key) =>
                            (
                                <div key={key} className={'portfolio__content__cards__item'}>
                                    <div className={'portfolio__content__cards__item__image-wrapper'}>
                                        {/*<a>*/}
                                            <img src={item.image} alt={'project image'}/>
                                        {/*</a>*/}
                                    </div>
                                </div>
                            ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Portfolio;