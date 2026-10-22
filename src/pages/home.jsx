import AboutPreview from '../features/home/components/AboutPreview'
import ProjectPreview from '../features/home/components/ProjectPreview'
import Hero from '../features/home/components/Hero'
import ContactSection from '../features/contact/components/ContactSection'

function Home() {
  return (
    <>
      <Hero/>
      <AboutPreview/>
      <ProjectPreview/>
      <ContactSection/>
    </>
  )
}

export default Home