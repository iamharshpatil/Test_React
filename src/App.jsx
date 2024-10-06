import Navigation from './assets/components/Navigation'
import { useState } from 'react'
import Footer from './assets/components/Footer'


const App = () => {
    const [app, setapp] = useState('Parent Component')
    const [nav, setnav] = useState('Nav Component')
    const [footer, setfooter] = useState('Footer Component')

  return (
    <div>
       <Navigation nav={nav}/>
       <Footer Footer={footer}/>
    </div>
  )
}

export default App