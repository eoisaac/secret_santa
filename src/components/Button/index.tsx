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
  const styles = {
    primary: `inline-flex items-center gap-2 bg-gradient-to-r from-indigo-400
      to-violet-500 px-8 py-2 text-slate-50 shadow-md`,
    icon: 'rounded-full p-1 text-slate-600 hover:text-violet-500',
  }

  return (
    <button
      className={`group cursor-pointer rounded-md focus:shadow-inner
      ${styles[variant]}`}
      {...rest}
    >
      <span className={`${srLabel ? 'sr-only' : 'font-medium'}`}>{label}</span>
      {icon && (
        <span
          className="text-lg transition-all duration-300
        group-hover:translate-x-2"
        >
          {icon}
        </span>
      )}
    </button>
  )
}
