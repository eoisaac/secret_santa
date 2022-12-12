import { Plus, User, WhatsappLogo, X } from 'phosphor-react'
import { Button } from '../../../../components/Button'
import { InputField } from '../../../../components/InputField'

interface ParticipantFieldProps {
  add: () => void
  remove: (id: string) => void
  id: string
  isLast: boolean
}

export const ParticipantField = ({
  add,
  remove,
  id,
  isLast,
}: ParticipantFieldProps) => {
  const handleRemove = () => {
    remove(id)
  }
  return (
    <li className="flex items-center justify-center gap-1">
      <div className="flex flex-col items-center gap-1 sm:flex-row">
        <InputField
          label="Name"
          srLabel
          icon={<User weight="bold" />}
          name={`${id}@name`}
          placeholder="John Doe"
        />
        <InputField
          label="Whatsapp number"
          srLabel
          icon={<WhatsappLogo weight="bold" />}
          type="tel"
          name={`${id}@number`}
          placeholder="(31)91234-5678"
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
