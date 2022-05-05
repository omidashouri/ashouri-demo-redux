import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './img/CSS/test.css'

function App_5bootstrap() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Omid Ashouri</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/*me: margin east,ms:margin right*/}
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                {/*or style={{'text-transform':'capitalize'}}*/}
                                <a className="nav-link text-capitalize" href="#">about us</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    Service
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-capitalize" href="#">gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-capitalize" href="#">contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={require("./img/car1.jfif")} className="d-block w-100"
                                 alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={require("./img/car2.jfif")} className="d-block w-100"
                                 alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={require("./img/car3.jfif")} className="d-block w-100"
                                 alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </header>
            {/*my-5:margin to y axis:for top and bottom */}
            <section className="main-heading my-5">
                <div className={'text-center'}>
                    <h1 className={'display-4'}>about us</h1>
                    <hr className={'w-25 mx-auto'}/>
                </div>
            </section>
            <div className={'container-fluid bg-primary'}>
                <div className={'row my-2'}>
                    <div className={'col-lg-6 col-md-6 col-12 col-xxl-6'}>
                        <img className={'image-fluid about-image'}
                             src={require("./img/car3.jfif")} alt={'default image'}/>
                    </div>
                    <div className={'d-flex justify-content-center align-items-start flex-column col-lg-6 col-md-6 col-12 col-xxl-6'}>
                       <h1>My Journey</h1>
                        <p>dummy large text ............ ......... . .. . .. . . .. .
                        .. .. . . . . . .. .. .. . .. . . . . . . .. . . .. . . .. . . .
                        .. .. . . ... . . . . . . . . . . ..... . .. . . ... ... .... ... .
                        .....</p>
                        <button className={'btn btn-info'}>Check More</button>
                    </div>
                </div>
            </div>
        </>
    );
}


export default App_5bootstrap;