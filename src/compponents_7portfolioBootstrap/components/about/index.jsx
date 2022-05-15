import React from "react";
import MyPic from '../../pic/omidashouri.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './about.css'
import {
    FacebookShareButton, FacebookIcon,
    LinkedinShareButton, LinkedinIcon,
    RedditShareButton, RedditIcon,
    TelegramShareButton, TelegramIcon,
    TwitterShareButton, TwitterIcon,
    WhatsappShareButton, WhatsappIcon
} from "react-share";

const About = () => {
    return (
        <section className={'about'}>
            <div className="container">
                <h1>About Me</h1>
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="photo-wrapper">
                            <img src={MyPic} alt="Omid Ashouri" style={{width: '100%'}}/>
                            <div className="photo-overlay">
                                <div className="photo-text social">
                                    <h5 style={{textAlign:'center', color:'#fff'}}>please share with me your idea!</h5>
                                    <>
                                        <FacebookShareButton className={'icon-button'}
                                                             url={'https://reactjs.org'}
                                                             quote={'This is text which you want to show when people share your portfolio'}
                                                             hashtag={'#backendDeveloper'}>
                                            <FacebookIcon className={'icon'} size={32} round={true}/>
                                        </FacebookShareButton>
                                        <TwitterShareButton className={'icon-button'}
                                                             url={'https://reactjs.org'}
                                                             quote={'This is text which you want to show when people share your portfolio'}
                                                             hashtag={'#backendDeveloper'}>
                                            <TwitterIcon className={'icon'} size={32} round={true}/>
                                        </TwitterShareButton>
                                        <TelegramShareButton className={'icon-button'}
                                                            url={'https://reactjs.org'}
                                                            quote={'This is text which you want to show when people share your portfolio'}
                                                            hashtag={'#backendDeveloper'}>
                                            <TelegramIcon className={'icon'} size={32} round={true}/>
                                        </TelegramShareButton>
                                        <LinkedinShareButton className={'icon-button'}
                                                            url={'https://reactjs.org'}
                                                            quote={'This is text which you want to show when people share your portfolio'}
                                                            hashtag={'#backendDeveloper'}>
                                            <LinkedinIcon className={'icon'} size={32} round={true}/>
                                        </LinkedinShareButton>
                                        <RedditShareButton className={'icon-button'}
                                                             url={'https://reactjs.org'}
                                                             quote={'This is text which you want to show when people share your portfolio'}
                                                             hashtag={'#backendDeveloper'}>
                                            <RedditIcon className={'icon'} size={32} round={true}/>
                                        </RedditShareButton>
                                        <WhatsappShareButton className={'icon-button'}
                                                           url={'https://reactjs.org'}
                                                           quote={'This is text which you want to show when people share your portfolio'}
                                                           hashtag={'#backendDeveloper'}>
                                            <WhatsappIcon className={'icon'} size={32} round={true}/>
                                        </WhatsappShareButton>
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 about-right">
                        <>
                            <h4>I am Onid Ashouri</h4>
                        </>
                        {/*lorem*4[TAB]*/}
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eos minima molestiae
                            quaerat voluptatibus? Ipsum iusto molestiae perferendis sed. Accusantium atque, eaque eiupet
                            hic nobis nulla. Accusantium, ipsum totam.
                        </p>
                        <p>Accusantium amet animi architecto at consectetur consequuntur cumque debitis dolores
                            eligendi exercitationem, explicabo facere fugit in modi molestiae, nostrum quae quibusdam
                            saepe, similique sit tenetur velit voluptas. A, est soluta!
                        </p>
                        <p>Adipisci architecto asperiores at, aut doloremque earum expedita, harum illo laboriosam
                            laborum laudantium magni molestiae natus necessitatibus neque nesciunt quae quasi quisquam
                            recusandae rem repellat sit temporibus, totam voluptas voluptate?
                        </p>
                        <p>Amet cumque dolorem ea eaque enim esse exercitationem explicabo facilis inventore iure
                            libero, modi non quae quam quas repudiandae sequi similique soluta tempora vitae! Accusamus
                            consequatur fugit inventore itaque tempora!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;