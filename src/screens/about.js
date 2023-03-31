import React, { useRef, useState } from 'react'

//Styles
import '../styles/about/about.css'
import '../styles/effects.css'

import NavBar from '../components/about/sticky-nav'

import Home from '../components/about/home'
import Contact from '../components/about/contact'
import Features from '../components/about/features'

import Footer from '../components/footer'

const isVisible = (element) => {
  const rect = element.getBoundingClientRect()
  const compH = rect.height
  return rect.y >= -compH && rect.y <= compH
}

const vh = (percent) => {
  const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (percent * h) / 100;
}

const scrollTo = (ref) => window.scrollTo({
  behavior: 'smooth',
  top: ref.current.offsetTop - vh(10)
});

const About = () => {

  // Page Navigation
  const [selectedPage, setSelected] = useState('Home')

  const loadedPages = useRef(['Home'])

  const page = useRef(0)

  /* References */
  const homeRef = useRef(),
    detailRef = useRef(),
    contactRef = useRef()

  const updateVisibility = () => {
    let selected = undefined

    if (isVisible(contactRef.current)) {
      if (page.current !== 2) {
        selected = 'Contact'
        page.current = 2
      }
    } else if (isVisible(detailRef.current)) {
      if (page.current !== 1) {
        selected = 'Details'
        page.current = 1
      }
    } else {
      if (page.current !== 0) {
        selected = 'Home'
        page.current = 0
      }
    }

    if (selected) {
      setSelected(selected)

      if (!loadedPages.current.includes(selected))
        loadedPages.current.push(selected)
    }
  }

  const scrollToRef = (evt, name) => {
    evt.preventDefault()

    switch (name) {
      case 'Home':
        scrollTo(homeRef)
        break;
      case 'Details':
        scrollTo(detailRef)
        break;
      case 'Contact':
        scrollTo(contactRef)
        break;
      default: break;
    }
  }


  // Page is considered "loaded" once isVisible(page)
  const isPageLoaded = (name) => loadedPages.current.includes(name)

  /**
   * TODO
   * Fix disc widget size
   * 
   * Revamp Features page
   * 
   */

  return (
    <div className='about'>

      <NavBar scrollTo={scrollToRef} updateVisibility={updateVisibility} selectedPage={selectedPage} />

      <Home innerRef={homeRef} />

      <Features innerRef={detailRef} entered={isPageLoaded} />

      <Contact innerRef={contactRef} entered={isPageLoaded} />

      <Footer />

      <div id="container-e086e594e3a661e1a7497e5a9d6f7111"></div>


    </div>
  )
}

export default About
