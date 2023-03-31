import Authorization from '../components/dashboard/authorization'
import NavBar from '../components/dashboard/side-nav'
import Purchase from '../components/dashboard/purchase'
import Download from '../components/dashboard/download'
import Contact from '../components/dashboard/contact'
import Clients from '../components/dashboard/clients'
import Warning from '../components/dashboard/warning'
import Footer from '../components/footer'

import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


// Style
import '../styles/dashboard/dashboard.css'

const Dashboard = () => {

  const [searchParams, setSearchParams] = useSearchParams()


  /* 0 = Purchase | 1 = Scripts | 2 = Clients */
  const [selected, setSelected] = useState(-1)

  /* Error message */
  const [showError] = useState(false)
  const [error, setError] = useState('')

  /* User data */
  const [displayName, setDisplayName] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')


  useEffect(() => {
    if (selected !== -1) return
    const module = searchParams.get('module')

    switch (module) {
      case 'download':
        setSelected(1)
        break
      case 'clients':
        setSelected(2)
        break
      case 'community':
        setSelected(3)
        break
      case 'marketplace':
        setSelected(4)
        break
      case 'purchase':
      default:
        setSelected(0)
        break
    }
    //eslint-disable-next-line
  }, [])

  /* JSX */
  return <>
    <Authorization setError={setError} setDisplayName={setDisplayName} setAvatarUrl={setAvatarUrl} />

    {(error ? (
      <span className={showError ? 'error-message' : 'message inactive'}>{error}</span>
    ) : (
      <>
        {/* Body */}
        <div className='dashboard'>
          <NavBar avatarUrl={avatarUrl} displayName={displayName} selected={selected} set={(n, i) => {
            setSelected(i)
            setSearchParams({ 'module': n.toLowerCase() })
          }} />

          <div className='content'>

            <Warning />

            {
              selected === 0 ? <Purchase /> :
                selected === 1 ? <Download /> :
                  selected === 2 ? <Clients /> :
                    selected === 3 ? <Contact /> : undefined
            }

          </div>

        </div>

        <Footer />
      </>
    ))}
  </>
}

export default Dashboard
