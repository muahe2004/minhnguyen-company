import type { LabelHTMLAttributes, ReactNode } from 'react'

type InputLabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode
  required?: boolean
}

export default function InputLabel({
  children,
  required = false,
  ...props
}: InputLabelProps) {
  return (
    <label {...props}>
      {children}
      {required ? <span style={{ color: '#dc2626' }}> *</span> : null}
    </label>
  )
}
