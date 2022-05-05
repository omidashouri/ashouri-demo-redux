import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './img/CSS/test.css'
import {OverlayTrigger, Toast, Tooltip} from "react-bootstrap";

function App_5bootstrap() {

    const renderTooltip = props => (
        <Tooltip {...props}>Tooltip for the register button</Tooltip>
    );

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
                                <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                {/*or style={{'text-transform':'capitalize'}}*/}
                                <a className="nav-link text-capitalize" href="about.html">about us</a>
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
                                <a className="nav-link text-capitalize" href="gallery.html">gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-capitalize" href="contact.html">contact us</a>
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

            {/*About US, my-5:margin to y axis:for top and bottom */}
            <section className="main-heading my-5">
                <div className={'text-center'}>
                    <h1 className={'display-4'}>about us</h1>
                    <hr className={'w-25 mx-auto'}/>
                </div>
                <div className={'container-fluid'}>
                    <div className={'row my-2'}>
                        <div className={'col-lg-6 col-md-6 col-12 col-xxl-6'}>
                            <img className={'image-fluid about-image'}
                                 src={require("./img/car3.jfif")} alt={'default image'}/>
                        </div>
                        <div
                            className={'d-flex justify-content-center align-items-start flex-column col-lg-6 col-md-6 col-12 col-xxl-6 bg-primary'}>
                            <h1>My Journey</h1>
                            <p>dummy large text ............ ......... . .. . .. . . .. .
                                .. .. . . . . . .. .. .. . .. . . . . . . .. . . .. . . .. . . .
                                .. .. . . ... . . . . . . . . . . ..... . .. . . ... ... .... ... .
                                .....</p>

                            <OverlayTrigger placement="top" overlay={renderTooltip}>
                                <button className={'btn btn-info'}>Check More</button>
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>

                {/* Scrollspy */}
                {/*<div className={'container'}>
                    <div className="row">
                        <div id={'navbar-example'} style={{'position': 'relative'}}>


                            <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
                                <a className="navbar-brand" href="#">Navbar</a>
                                <ul className="nav nav-pills">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#scrollspyHeading1">First</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#scrollspyHeading2">Second</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"
                                           role="button"
                                           aria-expanded="false">Dropdown</a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                                            <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0"
                                 style={{'height':'300px;','overflowY':'scroll;'}} className="scrollspy-example" tabIndex="0">
                                <h4 id="scrollspyHeading1">First heading</h4>
                                <p>.... .... ....</p>
                                <h4 id="scrollspyHeading2">Second heading</h4>
                                <p>... .... ...</p>
                                <h4 id="scrollspyHeading3">Third heading</h4>
                                <p>... .... ...</p>
                                <h4 id="scrollspyHeading4">Fourth heading</h4>
                                <p>... .... ...</p>
                                <h4 id="scrollspyHeading5">Fifth heading</h4>
                                <p>... .... ...</p>
                            </div>


                        </div>
                    </div>
                </div>*/}
            </section>

            {/*OUR SERVICES*/}
            <section className="main-heading my-5">
                <div className={'text-center'}>
                    <h1 className={'display-4'}>our services</h1>
                    <hr className={'w-25 mx-auto'}/>
                </div>
                <div className={'container services pt-5'}>
                    <div className={'row '}>
                        <div className={'col-lg-4 col-md-4 col-xxl-4 col-12'}>
                            <div className="card mb-3" style={{'max-width': '300px;'}}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={require("./img/car1.jfif")} className="img-fluid rounded-start"
                                             alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as
                                                a
                                                natural lead-in to additional content. This content is a little bit
                                                longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-lg-4 col-md-4 col-xxl-4 col-12'}>
                            <div className="card mb-3" style={{'max-width': '300px;'}}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={require("./img/car1.jfif")} className="img-fluid rounded-start"
                                             alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as
                                                a
                                                natural lead-in to additional content. This content is a little bit
                                                longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-lg-4 col-md-4 col-xxl-4 col-12'}>
                            <div className="card mb-3" style={{'max-width': '300px;'}}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={require("./img/car1.jfif")} className="img-fluid rounded-start"
                                             alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">This is a wider card with supporting text below as
                                                a
                                                natural lead-in to additional content. This content is a little bit
                                                longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-xxl-12 text-center my-5'}>
                            <button className={'btn btn-info'}>Check More</button>
                        </div>
                    </div>
                </div>
            </section>

            {/*Gallery*/}
            <section className="main-heading my-5">
                <div className={'text-center'}>
                    <h1 className={'display-4'}>Gallery</h1>
                    <hr className={'w-25 mx-auto'}/>
                </div>
                {/*Toast*/}
{/*                <div className="container">
                    <div className="row">
                        <Toast>
                            <Toast.Header>
                                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                <strong className="me-auto">Bootstrap</strong>
                                <small>11 mins ago</small>
                            </Toast.Header>
                            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        </Toast>
                    </div>
                </div>*/}
                <div className={'container services pt-5'}>
                    <div className={'row gy-3 gx-0'}>
                        <div className={'col-lg-4 col-md-4 col-xxl-4 col-12'}>
                            <img src={require("./img/car1.jfif")} alt={'gallery1'}/>
                        </div>
                        <div className={'col-lg-4 col-md-4 col-xxl-4 col-12'}>
                            <img src={require("./img/car1.jfif")} alt={'gallery1'}/>
                        </div>
                        <div className={'col-lg-4 col-md-4 col-xxl-4 col-12'}>
                            <img src={require("./img/car1.jfif")} alt={'gallery1'}/>
                        </div>
                        <div className={'col-lg-4 col-md-4 col-xxl-4 col-12'}>
                            <img src={require("./img/car1.jfif")} alt={'gallery1'}/>
                        </div>
                        <div className={'col-lg-4 col-md-4 col-xxl-4 col-12'}>
                            <img src={require("./img/car1.jfif")} alt={'gallery1'}/>
                        </div>
                        <div className={'col-lg-4 col-md-4 col-xxl-4 col-12'}>
                            <img src={require("./img/car1.jfif")} alt={'gallery1'}/>
                        </div>
                        <div className={'col-lg-4 col-md-4 col-xxl-4 col-12'}>
                            <img src={require("./img/car1.jfif")} alt={'gallery1'}/>
                        </div>
                        <div className={'col-lg-4 col-md-4 col-xxl-4 col-12'}>
                            <img src={require("./img/car1.jfif")} alt={'gallery1'}/>
                        </div>
                        <div className={'col-lg-4 col-md-4 col-xxl-4 col-12'}>
                            <img src={require("./img/car1.jfif")} alt={'gallery1'}/>
                        </div>
                        <div className={'col-lg-4 col-md-4 col-xxl-4 col-12'}>
                            <img src={require("./img/car1.jfif")} alt={'gallery1'}/>
                        </div>
                    </div>
                </div>
            </section>

            {/*Offer*/}
            <section className="main-heading my-5">
                <div className={'text-center mb-5'}>
                    <h1 className={'display-4'}>Offers</h1>
                    <hr className={'w-25 mx-auto'}/>
                </div>
                <div className={'container-fluid bg-offer py-5'}>
                    <div className={'row'}>
                        <div className={'col-xxl-12 col-12 text-center py-5'}>
                            <h1 className={'text-white'}>Check my videos please</h1>
                            <p>please support and like my videos, thank you for showing love</p>
                            <a href={'www.google.com'} target={'_blank'}>
                                <button className={'btn btn-info'}>Check More</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/*Contact US*/}
            <section className="main-heading my-5">
                <div className={'text-center'}>
                    <h1 className={'display-4'}>Contact Us</h1>
                    <hr className={'w-25 mx-auto'}/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className={'col-xxl-8 col-10 col-md-8 mx-auto'}>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp"/>
                                    <div id="emailHelp"
                                         className="form-text">We'll never share your email with anyone else.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Email Address</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1"
                                           placeholder={'enter your email address'}/>
                                </div>
                                <div className={'mb-3'}>
                                    <label for={''} className={'pr-4'}>Gender</label>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                               value="option1"/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Female</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                                               value="option2"/>
                                        <label className="form-check-label" htmlFor="inlineCheckbox2">Male</label>
                                    </div>
                                </div>
                                <div className={'mb-3'}>
                                    <label htmlFor="exampleDataList" className="form-label">Select City</label>
                                    <input className="form-control" list="datalistOptions" id="exampleDataList"
                                           placeholder="Type to search..."/>
                                    <datalist id="datalistOptions">
                                        <option value="San Francisco"></option>
                                        <option value="New York"></option>
                                        <option value="Seattle"></option>
                                        <option value="Los Angeles"></option>
                                        <option value="Chicago"></option>
                                    </datalist>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1"
                                           className="form-label">Comments
                                    </label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1"
                                              rows="3">
                                    </textarea>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer className={'bg-secondary text-center text-white'}>
                <p>@copyright omid ashouri</p>
            </footer>
        </>
    );
}


export default App_5bootstrap;