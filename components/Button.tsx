import { ReactNode, ButtonHTMLAttributes } from 'react'
import style from '../styles/components/button.module.css'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
  text?: string
  children?: ReactNode
  variant?: 'facebook' | 'default'
}

// Funcional components
export const Button: React.FC<IButton> = ({ variant='default', children, text, className, ...props }) => {
  return (
    <button
      {...props}
      className={
        className+' '+
        style.buttonDefault + ' '
        + ( variant === 'facebook' ? style.buttonFacebook : '')
      }>
      {children || text}
    </button>
  )
}