import React from "react";
import './styles.scss'

const Home = ()=>{
    return(
        <section className={'home'} id={'home'}>
            <div className={"home__text-wrapper"}>
                <h1>
                    Hello, I am Omid Ashouri.
                    <br/>
                    Back End Developer.
                </h1>
            </div>
        </section>
    )
}

export default Home;