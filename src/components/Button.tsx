import type { ButtonHTMLAttributes } from 'react'
import './styles/button.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ className = '', ...props }: ButtonProps) {
  const mergedClassName = ['primary-button', className].filter(Boolean).join(' ')

  return <button className={mergedClassName} {...props} />
}
