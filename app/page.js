import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Tutorial from '@/components/Tutorial'
import Footer from '@/components/Footer'
import Footer2 from '@/components/Footer2'

const page = () => {
  return (
    <div className=''>
    <Navbar/>
    <Hero/>
    <Features/>
    <Tutorial/>
    <Footer/>
    <Footer2/>
    </div>

  )
}

export default page