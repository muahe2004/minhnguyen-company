import Customers from '../customers/Customers'
import MainBanner from './components/MainBanner'
import Stats from './components/Stats'
import './home.css'

export default function Home() {
  return (
    <main className="home">
      <MainBanner />
      <Customers />
      <Stats />
    </main>
  )
}
