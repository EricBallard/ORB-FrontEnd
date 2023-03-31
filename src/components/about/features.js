import { useState, useEffect, useRef } from 'react'

// Style
import '../../styles/about/features.css'
import AmazonAd from '../amazon-ad'
import Adsterra from '../adsterra-banner'

const txts = [
  `Access to ORB's client and dashboard is restricted: purchase is required`,
  `With a defined capacity of 500 members, ORB's digital foot-print is miniscule`,
  'ORB simulates events using biometric data, producing indistinguishable automation'
]

const details = [
  {
    icon: 'devices',
    title: 'Cross-Platform',
    content: `Fully compatible with Windows, MacOS, Linux - all you need is a machine with RuneLite and an active internet connection `
  },
  {
    icon: 'psychology_alt',
    title: 'Simple Setup',
    content: `Starting is as easy as opening RuneLite, deploy numerous instances with one click after configuration`
  },
  {
    icon: 'bolt',
    title: 'High Performance',
    content: `Lightweight and resource minimalist, run in tandem with other plugins such as Low Detail and FPS Control`
  },
  {
    icon: 'group',
    title: 'Proxy Support',
    content: `Stay anonymous: configure RuneLite to tunnel data through supported proxies (HTTP/SOCKS)`
  },
  {
    icon: 'add_reaction',
    title: 'Quality of Life',
    content: `Manage your accounts with ease using built-in managers for credentials, logging-in, taking breaks, and more`,
  },
  {
    icon: 'emoji_people',
    title: 'Human Data',
    content: `From mouse paths to key strokes, all game input is packed with data recorded from real humans playing`,
  },
  {
    icon: 'new_releases',
    title: 'Free Scripts',
    content: `Membership includes access to freely available scripts made by ORB and other members`,
  },
  {
    icon: 'workspace_premium',
    title: 'Premium Scripts',
    content: `Purchase high quality scripts or offer or your own in the member's markplace `,
  }, {
    icon: 'code',
    title: 'Advanced API',
    content: `A developer's dream, do a lot with a little using our intuitive API and documentation`
  }
]


const Features = ({ innerRef, entered }) => {

  // Card selection
  const [hovered, setHovered] = useState(undefined)

  // Cycle Txt
  const timeoutIdA = useRef(undefined)
  const timeoutIdB = useRef(undefined)
  const registered = useRef(false)

  const index = useRef(-1)

  // Sub-title desc text
  const [switched, setSwitched] = useState(false)
  const [txt, setTxt] = useState(txts[index.current])

  const setIndex = (e, i) => {
    e.preventDefault()

    clearTimeout(timeoutIdA.current)
    clearTimeout(timeoutIdB.current)

    //Cycle txt
    index.current = i
    cycleTxt(0, false)
  }

  const cycleTxt = (timeout, addIndex) => {

    timeoutIdA.current = setTimeout(() => {
      setSwitched(true)

      timeoutIdB.current = setTimeout(() => {
        const i = addIndex ? index.current === 2 ? 0 : index.current + 1 : index.current
        index.current = i
        setTxt(txts[i])

        setSwitched(false)
        cycleTxt(10000, true)
      }, 1000)
    }, timeout)
  }

  useEffect(() => {
    if (registered.current) return
    else registered.current = true
    cycleTxt(0, true)
  }, [])

  return (
    <div className='details' ref={innerRef}>

      <AmazonAd />

      <div className={'title-holder'}>
        <div className={'threed-txt title slide-right' + (entered('Details') ? '' : ' start')}>
          <div className='bg'> Features </div>
          <div className='fg'> Features </div>
        </div>
      </div>

      <div className={'details-txt-cycle' + (hovered ? ' blur' : '')}>
        <p className={'sub-title fade-in' + (entered('Details') ? '' : ' start')}>
          <span className={'sub-title point' + (index.current === 0 ? ' selected' : '')} onClick={e => setIndex(e, 0)}>
            Private
          </span> / <span className={'sub-title point' + (index.current === 1 ? ' selected' : '')} onClick={e => setIndex(e, 1)}>
            Slotted
          </span> / <span className={'sub-title point' + (index.current === 2 ? ' selected' : '')} onClick={e => setIndex(e, 2)}>
            Secure
          </span>
          <br />

          <span className={'sub-title desc' + (switched ? ' blur' : '')}>{txt}</span>
        </p>
      </div>

      <div className={'details-info push-up' + (entered('Details') ? '' : ' start')}>
        {details.map(detail => {
          return (
            <div className={'details-card' + (hovered ? (hovered === detail.title ? '' : ' blur') : '')} key={detail.title}
              /* Select as hovered card */
              onMouseLeave={evt => {
                evt.preventDefault()
                setHovered(undefined)
              }}
              onMouseEnter={evt => {
                evt.preventDefault()
                setHovered(detail.title)
              }}
            >
              <div className='card-title'>{detail.title}

                <span className='card-icon material-symbols-rounded'>
                  {detail.icon}
                </span>
              </div>

              <p className='card-content'>{detail.content}</p>

            </div>
          )
        })}


        <Adsterra />

      </div>

    </div>
  )
}

export default Features
