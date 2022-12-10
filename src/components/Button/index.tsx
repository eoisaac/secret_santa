import { HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string
  icon?: JSX.Element
  iconLeft?: boolean
  variant?: 'primary' | 'icon'
}

export const Button = ({
  label,
  icon,
  variant = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className="group inline-flex cursor-pointer items-center gap-2 rounded-full
      bg-gradient-to-r from-indigo-400 to-violet-500 px-8 py-2 
      text-slate-50 shadow-md focus:shadow-inner"
    >
      <span className="font-medium">{label}</span>
      {icon && (
        <span className="transition-all duration-500 group-hover:translate-x-2">
          {icon}
        </span>
      )}
    </button>
  )
}
