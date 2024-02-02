'use client'
import React, { useState } from 'react'
import TextAreaField from './TextAreaField'
import TextField from './TextField'
import emailjs from '@emailjs/browser'

const ContactForm: React.FC = () => {
  const SERVICE_ID = 'default_service'
  const TEMPLATE_ID = 'template_service'
  const PUBLIC_ID = 'qmXpZwvVswSAoVVrc'

  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Submit form data
    console.log(formData)

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target as HTMLFormElement, PUBLIC_ID)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text)
        },
        (err) => {
          console.error('FAILED...', err)
        }
      )

    setFormData({
      from_name: '',
      reply_to: '',
      message: '',
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label='Name'
        name='from_name'
        type='text'
        required
        value={formData.from_name}
        onChange={handleChange}
      />
      <TextField
        label='Email'
        name='reply_to'
        type='email'
        required
        value={formData.reply_to}
        onChange={handleChange}
      />
      <TextAreaField
        label='Message'
        name='message'
        required
        value={formData.message}
        onChange={handleChange}
      />
      <button
        type='submit'
        className='bg-jada-purple hover:bg-jada-pink text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      >
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
