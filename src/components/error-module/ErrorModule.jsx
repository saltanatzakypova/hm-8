import React from 'react'
import { ErrorCall } from '../styles/Styles'

const ErrorModule = ({closeModal, title, message}) => {
  return (
    <div>
      <ErrorCall>
          <div>
            <h1>Error</h1>
          </div>
          <div className='title__error'>
            {title}
          </div>
          <div className='message__error'>{message}</div>
          <div>
            <button onClick={closeModal}>Close</button>
          </div>
        </ErrorCall>
    </div>
  )
}

export default ErrorModule
