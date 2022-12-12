import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string
  label: string
  srLabel?: boolean
  icon?: JSX.Element
  errorMessage?: string
  register?: UseFormRegisterReturn<string>
}

export const InputField = ({
  type = 'text',
  label,
  srLabel = false,
  errorMessage,
  icon,
  register,
  ...rest
}: InputFieldProps) => {
  const hasError = Boolean(errorMessage)
  const hasIcon = Boolean(icon)

  return (
    <label className="group relative my-1">
      <span
        className={`${
          srLabel
            ? 'sr-only'
            : 'block pl-2 text-left font-medium text-slate-400'
        }`}
      >
        {label}
      </span>
      <div
        className="flex flex-1 items-center gap-2 overflow-hidden rounded-md
      bg-slate-50 px-2 py-1 shadow-sm group-focus-within:shadow-focus"
      >
        {hasIcon && (
          <div
            className="text-lg text-slate-300
        group-focus-within:text-violet-500"
          >
            {icon}
          </div>
        )}
        <input
          type={type}
          {...register}
          {...rest}
          className="bg-transparent focus:shadow-none"
        />
      </div>
      {hasError && (
        <span className="absolute top-full block pl-2 text-sm text-rose-500">
          {errorMessage}
        </span>
      )}
    </label>
  )
}
