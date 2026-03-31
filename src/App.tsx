import Footer from './components/Footer'
import Header from './components/Header'
import AboutUs from './modules/abouts/AboutUs'
import Home from './modules/home/Home'

export default function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <AboutUs />
      <Footer />
    </div>
  )
}
