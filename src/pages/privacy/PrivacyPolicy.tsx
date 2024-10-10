import useScrollToTop from '@/components/ScrollToTop'
import Footer from '@/components/layout/homepage/footer/Footer'
import { Navbar } from '@/components/navbar/Navbar'
import Privacy from '@/components/privacy/Privacy'
import React from 'react'


const PrivacyPolicy: React.FC = () => {
  useScrollToTop();
  return (
      <div>
          <Navbar />
          <Privacy/>
          <Footer/>
    </div>
  )
}

export default PrivacyPolicy