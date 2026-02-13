import { useTranslation } from 'react-i18next';
import Button from '../../components/Button'
import './home.css'

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="home">
      <section className="home-hero" id="services">
        <img className="hero-hero__banner" src="/images/banner1.png" alt="" />
      </section>

      <section className='home-content'>
        <h1 className='home-content__title'>
          {t('home.title')}
        </h1>

        <p className='home-content__desc'>
          {t('home.description')}
        </p>

        <Button className='secondary-button'>{t('home.contact-button')}</Button>
      </section>
    </main>
  )
}
