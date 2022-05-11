import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import {RiContactsFill} from 'react-icons/ri'
import './styles.scss'


const Contact = () => {
    return (
        <section id={'contact'} className={'contact'}>
            <PageHeaderContent headerText={'Contact Me'} icon={<RiContactsFill size={40}/>}/>

            <div className={'contact__content'}>
                <h3 className={'contact__content__header-text'}>Lets Talk</h3>
                <div className={'contact__content__form'}>
                    <div className={'contact__content__form__controlsWrapper'}>
                        <div className={'nameWrapper'}>
                            <input name={'name'} className={'inputName'} type={'text'}/>
                            <label htmlFor={'name'} className={'nameLabel'}>Name</label>
                        </div>
                        <div className={'emailWrapper'}>
                            <input name={'email'} className={'inputEmail'} type={'text'}/>
                            <label htmlFor={'email'} className={'emailLabel'}>Email</label>
                        </div>
                        <div className={'descriptionWrapper'}>
                            <textarea name={'description'}
                                      className={'inputDescription'}
                                      type={'text'}
                                      row={'5'} style={{resize: 'none'}}
                            />
                            <label htmlFor={'description'} className={'descriptionLabel'}>Description</label>
                        </div>
                    </div>
                    <button>
                        Submit
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Contact;