import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Insights from './components/InsightsSection'
import AboutWOL from './components/AboutWOL'
import ExpertSection from './components/ExpertsSection'

const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <Insights/>
      <AboutWOL/>
      <ExpertSection/>
      
    </div>
  )
}

export default App