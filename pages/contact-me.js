import { useState } from 'react'
import CSidebar from '../components/layout/cSidebar'
import { RxCross1 } from 'react-icons/rx'
import Cmjs from '../components/contact-me/cmjs'

export default function ContactMe() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  return (
    <div>
      <div className='cm-header'>
        <div className='cm-header-center'>
          <p>contacts</p>
          <div
            style={{
              borderRight: '1px solid var(--clr-lines)',
              height: '5.5vh',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <RxCross1
              style={{ height: '1.5vh', padding: '0px 30px 0px 20px' }}
            />
          </div>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        <div className='cm-form'>
          <form action='' className='form'>
            <label>_name:</label>
            <input
              type='text'
              className='input'
              onChange={(e) => setName(e.target.value)}
            />
            <label>_email:</label>
            <input
              type='text'
              className='input'
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>_message:</label>
            <textarea
              rows='7'
              className='input'
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className='submit-button'>
              <p>submit-message</p>
            </button>
          </form>
        </div>
        <Cmjs name={name} email={email} message={message} />
      </div>
    </div>
  )
}

ContactMe.getLayout = function getLayout(page) {
  return <CSidebar>{page}</CSidebar>
}
