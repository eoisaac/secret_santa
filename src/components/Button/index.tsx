import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  icon?: JSX.Element
  srLabel?: boolean
  variant?: 'primary' | 'icon'
}

export const Button = ({
  label,
  srLabel = false,
  icon,
  variant = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <button
      className="group inline-flex cursor-pointer items-center gap-2
    rounded-full bg-gradient-to-r from-indigo-400 to-violet-500 px-8 py-2
    text-slate-50 shadow-md focus:shadow-inner"
      {...rest}
    >
      <span className={`${srLabel ? 'sr-only' : 'font-medium'}`}>{label}</span>
      {icon && (
        <span
          className="text-lg transition-all duration-500 
        group-hover:translate-x-2"
        >
          {icon}
        </span>
      )}
    </button>
  )
}
