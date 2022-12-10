import { InputHTMLAttributes } from 'react'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string
  label: string
  srLabel?: boolean
  icon?: JSX.Element
  errorMessage?: string
}

export const InputField = ({
  type = 'text',
  label,
  srLabel = false,
  errorMessage,
  icon,
  ...rest
}: InputFieldProps) => {
  const hasError = Boolean(errorMessage)

  return (
    <label>
      <span>{label}</span>
      <div>
        {icon}
        <input type={type} {...rest} />
      </div>
      <span>{errorMessage}</span>
    </label>
  )
}
