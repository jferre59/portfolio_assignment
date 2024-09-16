import { Route, Routes } from 'react-router-dom'
import Home from './src/components/Home'
import Layout from './src/components/Layout'
import About from './src/components/About'
import Contact from './src/components/Contact'
import Projects from './src/components/Projects'
import Services from './src/components/Services'

const MainRouter = () => {
 return (<div>
 <Layout/>
 <Routes>
 
 <Route exact path="/" element={<Home />} />
 <Route exact path="/about" element={<About />} />
 <Route exact path="/contact" element={<Contact />} />
 <Route exact path="/projects" element={<Projects />} />
 <Route exact path="/services" element={<Services />} />
 
 </Routes>
 </div>
)
}
export default MainRouter