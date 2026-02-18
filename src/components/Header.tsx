import { useTranslation } from 'react-i18next'
import SwitchLanguages from './SwitchLanguages'
import './styles/header.css'

export default function Header() {
  const { t } = useTranslation()

  return (
    <header className="header">
      <div className="container header-inner">
        <a className="header-brand" href="/">
          <img
            className="header-brand__logo"
            src="/logoseta.svg"
            alt="Minh Nguyen"
            aria-hidden="true"
          />
          <span>MINH NGUYEN</span>
        </a>
        <nav className="header-links">
          <a className="header-link__item" href="#about-us">{t('header.about-us')}</a>
          <a className="header-link__item" href="#services">{t('header.services')}</a>
          <a className="header-link__item" href="#solutions">{t('header.solutions')}</a>
          <a className="header-link__item" href="#work">{t('header.projects')}</a>
          <a className="header-link__item" href="#contact">{t('header.contact')}</a>
        </nav>
        <div className="header-actions">
          <SwitchLanguages />
        </div>
      </div>
    </header>
  )
}