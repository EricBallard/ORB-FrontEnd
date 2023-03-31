import { Route, Routes } from 'react-router-dom'

import About from './screens/about'
import Dashboard from './screens/dashboard'

const App = () => {

  // JSX
  return (
    <>
      <Routes>

        <Route path='/.well-known/apple-developer-merchantid-domain-association' />

        <Route path='/dashboard' element={<Dashboard />} />

        <Route path='/*' element={<About />} replace />

      </Routes>
    </>
  )
}

//
export default App
