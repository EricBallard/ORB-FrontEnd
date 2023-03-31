import { useState, useEffect, useRef } from 'react'
import CachedImage from '../cached-image'

// Style
import '../../styles/navbar.css'


let stickyY = undefined

const pages = ['Home', 'Details', 'Contact', 'Login']

const login = (evt) => {
  evt.preventDefault()
  window.location = 'https://HOST:PORT/api/auth'
}

const NavBar = ({ scrollTo, updateVisibility, selectedPage }) => {

  const navRef = useRef()

  const [isHovered, setHovered] = useState(false)

  const [sticky, setSticky] = useState(false)


  const scrollWheel = (e) => {
    e.preventDefault()

    if (!navRef.current) return
    updateVisibility()

    const { offsetTop } = navRef.current
    const y = window.pageYOffset

    // console.log(y)

    if (offsetTop && y >= offsetTop) {
      stickyY = y;
      setSticky(true)
    } else {
      if (stickyY && y <= stickyY) {
        setSticky(false)
      }
    }

  }

  useEffect(() => {
    window.addEventListener('scroll', (e) => scrollWheel(e), { passive: false })

    return () => {
      window.removeEventListener('scroll', (e) => scrollWheel(e), { passive: false })
    }
  }, [])

  return (
    <div ref={e => navRef.current = e} className={'nav-bar' + (sticky ? ' sticky' : '')} >

      <div className='nav-content'>

        <CachedImage url='/images/logo.png' name='brand-logo' />

        {
          pages.map(
            page => {
              return (page === 'Login' ?
                <span key={page} className='nav-login' onClick={evt => login(evt)}
                  onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>

                  <span key={page} className={'nav-link' + (isHovered ? ' hovered' : '')} >
                    Login with
                  </span>

                  <CachedImage url="/images/discord-logo-white.png" name={'nav-discord' + (isHovered ? ' hovered' : '')} alt='' />
                </span>
                :
                <span key={page} className={'nav-link' + (selectedPage === page ? ' selected' : '')} onClick={evt => scrollTo(evt, page)} >
                  {page}
                </span>
              )

            }
          )
        }
      </div>
    </div>
  )
}

export default NavBar
