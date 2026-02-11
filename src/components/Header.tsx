import { useTranslation } from 'react-i18next'
import SwitchLanguages from './SwitchLanguages'
import './styles/header.css'

export default function Header() {
  const { t } = useTranslation()

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <span className="brand-mark" />
          Minh Nguyen Studio
        </div>
        <nav className="nav-links">
          <a href="#services">{t('header.services')}</a>
          <a href="#solutions">{t('header.solutions')}</a>
          <a href="#work">{t('header.projects')}</a>
          <a href="#contact">{t('header.contact')}</a>
        </nav>
        <div className="header-actions">
          <SwitchLanguages />
        </div>
      </div>
    </header>
  )
}
