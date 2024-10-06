import Navigation from './assets/components/Navigation'
import { useState } from 'react'
import Footer from './assets/components/Footer'


const App = () => {
    const [app, setapp] = useState('Parent Component')
    const [nav, setnav] = useState('Nav Component')
    const [footer, setfooter] = useState('Footer Component')
    const ChangeH = () => {
      setnav('New Nav Component')
    }
  return (
    <div>
       <Navigation nav={nav} setnav={setnav}/>
       <button onClick={ChangeH}>Click </button>
       <Footer Footer={footer}/>
    </div>
  )
}

export default App