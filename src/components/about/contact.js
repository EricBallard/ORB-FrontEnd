
import WidgetBot from '@widgetbot/react-embed'
import CachedImage from '../cached-image'
import { useState } from 'react'

// Style
import '../../styles/about/contact.css'

const SUPPORT_EMAIL = 'contact@osrsbots.com'

const Contact = ({ innerRef, entered }) => {

  const [chat, setChat] = useState(false)

  const [txt, setTxt] = useState(SUPPORT_EMAIL)

  const copyEmail = (evt) => {
    evt.preventDefault()
    navigator.clipboard.writeText(SUPPORT_EMAIL);
    setTxt('copied to clipboard')

    setTimeout(() => setTxt(SUPPORT_EMAIL), 2000)
  }

  return (
    <div className='contact' ref={innerRef}>

      <div className={'title-holder'}>
        <div className={'threed-txt title slide-right' + (entered('Contact') ? '' : ' start')}>
          <div className='threed-txt bg'> Contact </div>
          <div className='threed-txt fg'> Contact </div>
        </div>
      </div>

      <div className={'discord grow-out' + (entered('Contact') ? '' : ' start')}>
        <div className='discord-holder'>
          {/* Prevent loading until scroll down and load page */}
          {chat ?
            <WidgetBot className='discord-chat'
              server='1062264441925799987' // Orb
              channel='1063290270222909511' // #welcome
            /> :
            <div className='discord-info'>

              <span className='email-holder'>
                <span className='sub-title email-title'>
                  EMAIL /  </span> <span onClick={copyEmail} className={'contact-email'
                    + (txt === SUPPORT_EMAIL ? '' : ' copied')} data-txt={txt === SUPPORT_EMAIL ? txt : ''}>
                  {txt}
                </span>
              </span>

              <p className='sub-title discord-divider'>- or -</p>


              <button onClick={(evt) => {
                evt.preventDefault()
                setChat(true)
              }}>

                Join the chat on
                <CachedImage url="/images/discord-logo-green.png" name={'discord-info-img'} alt='' />

              </button>
            </div>}

        </div>
      </div>

    </div >
  )
}
export default Contact
