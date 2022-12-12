import { Plus, User, WhatsappLogo, X } from 'phosphor-react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { Button } from '../../../../components/Button'
import { InputField } from '../../../../components/InputField'

interface ParticipantFieldProps {
  add: () => void
  remove: (id: string) => void
  id: string
  isLast: boolean
  register: UseFormRegister<FieldValues>
  errors: any
}

export const ParticipantField = ({
  add,
  remove,
  id,
  isLast,
  register,
  errors,
}: ParticipantFieldProps) => {
  const handleRemove = () => {
    remove(id)
  }
  return (
    <li className="flex items-center justify-center gap-2">
      <div className="flex flex-col items-center gap-2 sm:flex-row">
        <InputField
          label="Name"
          srLabel
          icon={<User weight="bold" />}
          placeholder="John Doe"
          register={register(`name`, { required: true, minLength: 3 })}
          errorMessage={errors.name && errors.name.message}
        />
        <InputField
          label="Whatsapp number"
          srLabel
          icon={<WhatsappLogo weight="bold" />}
          type="tel"
          placeholder="(31)91234-5678"
          register={register(`number`, { required: true })}
          errorMessage={errors.number && errors.number.message}
        />
      </div>
      {isLast ? (
        <Button
          label="Add participant"
          srLabel
          icon={<Plus weight="bold" />}
          variant="icon"
          onClick={add}
          type="button"
        />
      ) : (
        <Button
          label="Add participant"
          srLabel
          icon={<X weight="bold" />}
          variant="icon"
          onClick={handleRemove}
          type="button"
        />
      )}
    </li>
  )
}
