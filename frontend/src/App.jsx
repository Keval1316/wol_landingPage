import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Insights from './components/InsightsSection'
import AboutWOL from './components/AboutWOL'
import ExpertSection from './components/ExpertsSection'
import WhyChooseWOL from './components/WhyChooseWOL'
import TransformSection from './components/TransformSection'
import UpcomingEvents from './components/UpcomingEvents'
import EventsSection from './components/Events'
import SubscribeSection from './components/SubscribeSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <Insights/>
      <AboutWOL/>
      <ExpertSection/>
      <WhyChooseWOL/>
      <TransformSection/>
      <UpcomingEvents/>
      <EventsSection/>
      <SubscribeSection/>
      <Footer/>
      
    </div>
  )
}

export default App