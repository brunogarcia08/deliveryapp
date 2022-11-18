// import { ReactNode } from 'react'
// import style from '../styles/components/button.module.css'

import { InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react'

interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

interface WrapperInputType extends LabelHTMLAttributes<HTMLLabelElement>{
  children?: ReactNode;
  label?: string;
}

const WrapperInput: React.FC<WrapperInputType> = ({label, children, ...props}) => {
  if (label){
    return (
      <label className='text-text flex flex-col w-full' {...props}>
        {label}
        {children}
      </label>
    )
  }
  return <div className='flex flex-col w-full'>{children}</div>
}


// Funcional components
export const Input: React.FC<InputType> = ({label, errorMessage, ...props}) => {
  
  return (
    <WrapperInput label={label}>
        <input 
          className={`w-full bg-slate-200 text-black ${errorMessage ? 'outline-red-600 border-red-600 border border-solid' : ''}`} 
          {...props}
        />
        <p className='text-red-600'>{errorMessage}</p>
    </WrapperInput>

  )
}