import React, {useState} from "react";
import ImageOne from '../../images/1.jpeg';
import ImageTwo from '../../images/2.jpeg';
import ImageThree from '../../images/3.jpeg';
import ImageFour from '../../images/4.jpeg';
import ImageFive from '../../images/5.jpeg';
import PageHeaderContent from "../../components/pageHeaderContent";
import {AiFillProject} from 'react-icons/ai'
import {filterOptions, portfolioData} from "./utils";
import './styles.scss'


const Portfolio = () => {

    const [filterValue, setFilterValue] = useState(1)
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const filteredPortfolioData = filterValue === 1
        ?
        portfolioData
        :
        portfolioData
            .filter((item) => item.sectionId === filterValue);

    const handleFilter = (id) => {
        setFilterValue(id);
        console.log(id);
    }

    return (
        <section id={'portfolio'} className={'portfolio'}>
            <PageHeaderContent headerText={'My Portfolio'} icon={<AiFillProject size={40}/>}/>
            <div className={'portfolio__content'}>
                <ul className={'portfolio__content__filter'}>
                    {
                        filterOptions.map((option) =>
                            (
                                <li onClick={() => handleFilter(option.id)}
                                    key={`filter${option.id}`}
                                    className={option.id === filterValue ? 'active' : ''}
                                >{option.label}</li>
                            )
                        )
                    }
                </ul>
                <div className={'portfolio__content__cards'}>
                    {
                        filteredPortfolioData.map((item, key) =>
                            (
                                <div onMouseEnter={() => setHoveredIndex(key)}
                                     onMouseLeave={() => setHoveredIndex(null)}
                                     key={key} className={'portfolio__content__cards__item'}>
                                    <div className={'portfolio__content__cards__item__img-wrapper'}>
                                        <a>
                                            <img src={item.image} alt={'project image'}/>
                                        </a>
                                    </div>
                                    <div className={'overlay'}>
                                        {
                                            hoveredIndex === key && (
                                                <div>
                                                    <p>{item.projectName}</p>
                                                    <button>Visit</button>
                                                </div>
                                            )
                                        }

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