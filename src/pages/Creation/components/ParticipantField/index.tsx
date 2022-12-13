import { Plus, User, WhatsappLogo, X } from 'phosphor-react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { BaseParticipant } from '../../../../@types/app'
import { FieldErrors } from '../../../../@types/form'
import { Button } from '../../../../components/Button'
import { InputField } from '../../../../components/InputField'

interface ParticipantFieldProps {
  id: string
  index: number
  isLast: boolean
  errors: FieldErrors
  add: (participant: BaseParticipant) => void // check type
  remove: (test: any) => any // check type
  register: UseFormRegister<FieldValues>
}

export const ParticipantField = ({
  id,
  index,
  isLast,
  errors,
  add,
  remove,
  register,
}: ParticipantFieldProps) => {
  const handleAddParticipant = () => {
    add({ name: '', number: '' })
  }

  const handleRemoveParticipant = () => {
    remove(id)
  }

  return (
    <li className="flex items-center justify-center gap-2" key={id}>
      <div className="flex flex-col items-center gap-2 sm:flex-row">
        <InputField
          label="Name"
          srLabel
          icon={<User weight="bold" />}
          placeholder={`Participant ${index + 1}`}
          register={register(`participants[${index}].name`, {
            required: true,
          })}
          errorMessage={
            errors.participants &&
            errors.participants[index] &&
            errors.participants[index].name &&
            errors.participants[index].name.message
          }
        />
        <InputField
          label="Whatsapp number"
          srLabel
          icon={<WhatsappLogo weight="bold" />}
          type="tel"
          placeholder="(31)91234-5678"
          register={register(`participants[${index}].number`, {
            required: true,
          })}
          errorMessage={
            errors.participants &&
            errors.participants[index] &&
            errors.participants[index].number &&
            errors.participants[index].number.message
          }
        />
      </div>
      {isLast ? (
        <Button
          label="Add participant"
          title="Add participant"
          srLabel
          icon={<Plus weight="bold" />}
          variant="icon"
          onClick={handleAddParticipant}
          type="button"
        />
      ) : (
        <Button
          label="Remove participant"
          title="Remove participant"
          srLabel
          icon={<X weight="bold" />}
          variant="icon"
          onClick={handleRemoveParticipant}
          type="button"
        />
      )}
    </li>
  )
}
