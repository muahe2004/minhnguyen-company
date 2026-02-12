import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import flagUK from '../assets/images/UK.svg'
import flagVN from '../assets/images/VN.svg'
import './styles/switchLanguages.css'

const LANGUAGES = [
  { code: 'vi', label: 'Tiếng Việt', flag: flagVN },
  { code: 'en', label: 'English', flag: flagUK },
]

export default function SwitchLanguages() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  const currentLang = i18n.language?.startsWith('vi') ? 'vi' : 'en'
  const currentItem =
    LANGUAGES.find((lang) => lang.code === currentLang) ?? LANGUAGES[1]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current) return
      if (!wrapperRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const handleSelect = (lang: string) => {
    i18n.changeLanguage(lang)
    setOpen(false)
  }

  return (
    <div className="lang-switch" ref={wrapperRef}>
      <button
        className="lang-trigger"
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <img className="lang-flag" src={currentItem.flag} alt="" />
        <span className="lang-current">{currentItem.label}</span>
        <span className={`lang-caret ${open ? 'open' : ''}`} aria-hidden="true" />
      </button>
      {open && (
        <div className="lang-menu" role="listbox" aria-label="Chọn ngôn ngữ">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              role="option"
              aria-selected={lang.code === currentLang}
              className={
                lang.code === currentLang
                  ? 'lang-option active'
                  : 'lang-option'
              }
              onClick={() => handleSelect(lang.code)}
            >
              <span className="lang-option-label">
                <img className="lang-flag" src={lang.flag} alt="" />
                <span>{lang.label}</span>
              </span>
              {lang.code === currentLang && <span className="dot" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
