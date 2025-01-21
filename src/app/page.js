import React from 'react'
import Nav from '../app/UI/components/Nav'
import Banner from '../app/UI/components/Banner'
import Patners from '../app/UI/components/Patners'
import Places from '../app/UI/components/Places'
import Ourstory from '../app/UI/components/Ourstory'
import People from '../app/UI/components/People'
import Connect from '../app/UI/components/Connect'
import News from '../app/UI/components/News'
import Project from '../app/UI/components/Project'
import Donations from '../app/UI/components/Donations'
import Events from '../app/UI/components/Events'
import Incident from '../app/UI/components/incident'
import Fees from '../app/UI/components/Fees'
import Footer from '../app/UI/components/footer'

const page = () => {
  return (
    <>
      <div>
        <Nav />
        <Banner />
        <Patners />
        <Places />
        <Ourstory />
        <People />
        <Connect />
        <News />
        <Project />
        <Donations />
        <Events />
        <Incident />
        <Fees />
        <Footer />
      </div>
    </>
  )
}

export default page