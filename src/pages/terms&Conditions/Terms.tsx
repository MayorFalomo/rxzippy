import useScrollToTop from '@/components/contactForm/ScrollToTop'
import Footer from '@/components/layout/homepage/footer/Footer'
import { Navbar } from '@/components/navbar/Navbar'
import TermsAndCond from '@/components/terms&conditions/TermsAndCond'
import React from 'react'

const Terms: React.FC = () => {
  useScrollToTop()
  return (
      <div>
          <Navbar />
          <TermsAndCond/>
          <Footer/>
    </div>
  )
}

export default Terms