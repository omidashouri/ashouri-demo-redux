import React, { useState, useRef } from 'react'
import './contacts.css'
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form'

// EMAILJS
const service_ID = 'service_react_id'
const template_ID = 'service_react_id'
const user_ID = 'iffECWZz4qACZ3nCn'
//10:40
const Contacts = () => {
/*  const [successMessage, setSuccessMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data, r) => {
    sendEmail(
      service_ID,
      template_ID,
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      user_ID
    )
    r.target.reset()
  }

  const sendEmail = (service_ID, template_ID, variables, user_ID) => {
    emailjs
      .send(service_ID, template_ID, variables, user_ID)
      .then(() => {
        setSuccessMessage(
          "The form sent successfuly! I'll contact you as soon as possible!"
        )
      })
      .catch((err) => console.log(`Somthing went wrong ${err}`))
  }*/


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_react_id', 'template_react_id', form.current, 'iffECWZz4qACZ3nCn')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
  };

  return (
    <div className='form-wrapper'>
      <div className='form-container'>
        <div className='form-card-gradient'></div>
        <h2>describe your project</h2>
        {/*<span className='success-message'>{successMessage}</span>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <div className='text-input'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              {...register('name', { required: true })}
            />
            {errors.name && (
              <span className='input-error'>This field is required</span>
            )}
          </div>
          <div className='text-input'>
            <input
              type='text'
              placeholder='Email'
              name='email'
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
            />
            {errors.email && (
              <span className='input-error'>
                This field is empty or invalid email format.
              </span>
            )}
          </div>
          <div className='text-input'>
            <input
              type='text'
              placeholder='Subject'
              name='subject'
              {...register('subject', { required: true })}
            />
            {errors.subject && (
              <span className='input-error'>This field is required</span>
            )}
          </div>
          <div className='text-area'>
            <textarea
              type='text'
              className='text-area'
              placeholder='Describe your project'
              name='description'
              {...register('description', { required: true })}
            />
            {errors.description && (
              <span className='input-error'>This field is required</span>
            )}
          </div>
          <button className='button'>SEND</button>
        </form>*/}
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contacts
