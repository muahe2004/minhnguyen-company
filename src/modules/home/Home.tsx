import MainBanner from './components/MainBanner';
import Stats from './components/Stats';
import './home.css';

export default function Home() {
  return (
    <main className="home">
      <MainBanner />
      <Stats />
    </main>
  )
};