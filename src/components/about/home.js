
import { useRef, useState, useEffect } from 'react'
import CachedImage from '../cached-image'

// Style
import '../../styles/about/home.css'

const osrsLink = 'https://oldschool.runescape.com/'

const runeLiteLink = 'https://runelite.net/'

const Home = ({ innerRef }) => {

  const openLink = (evt, link) => {
    evt.preventDefault()
    window.open(link, '_blank');
  }

  // Animation
  const [animState, setAnimState] = useState(0)
  const startedAnim = useRef(false)

  // Audio
  const audio = useRef(new Audio('/audio/runescape_music.mp3'));

  const [audioTime, setTime] = useState(0)
  const [playing, setPlaying] = useState(false);

  const toggleAudio = (e) => {
    e.preventDefault()
    const song = audio.current

    if (song.paused) {
      setPlaying(true)
      song.currentTime = audioTime
      song.volume = 0.2
      song.loop = true
      song.play()
    } else {
      setPlaying(false)
      setTime(song.currentTime)
      song.pause()
    }
  }

  // TODO - pause/resume focus loss/gain
  useEffect(() => {
    if (startedAnim.current) return
    else {
      startedAnim.current = true

      window.scrollTo(0, 0)

      // State: 0 = Not Started | 1 = Started | 2 = Finished
      setAnimState(1)
      setTimeout(() => setAnimState(2), 3500)
    }
  }, [])

  //className={}
  return (
    <div className='home' ref={innerRef}>

      <div className={'title-holder slide-down' + (animState > 0 ? '' : ' start')}>
        <div className={'threed-txt title slide-right' + (animState > 0 ? '' : ' start')}>
          <div className='bg'> ORB </div>
          <div className='fg'> ORB </div>
        </div>
      </div>

      {/* This should help web crawlers identify the content more concisely */}
      <h1 style={{ display: 'none' }}>ORB</h1>

      <p id='sub-title' className={'sub-title' + (animState === 2 ? '' : animState > 0 ? ' slide-up' : ' slide-up start')}>
        Old School <span className='runelite-link' onClick={evt => openLink(evt, osrsLink)}>
          RuneScape</span> automation, <wbr />forged in <span className='runelite-link' onClick={evt => openLink(evt, runeLiteLink)}>
          RuneLite</span>
      </p>


      <div className={'home-img grow-out' + (animState > 0 ? '' : ' start')}>
        <img src='/images/client_preview.gif' className='home-img-content' draggable='false' onClick={toggleAudio} alt='' />

        <CachedImage name='home-img-content' event={toggleAudio}
          url={'/images/client_preview_' + (playing ? 'play' : 'pause') + '.jpeg'} />
      </div>

      
    </div>
  )

}

export default Home
