import { Plus, User, WhatsappLogo, X } from 'phosphor-react'
import { InputField } from '../../../../components/InputField'

interface ParticipantFieldProps {
  add: () => void
  remove?: () => void
  isLast?: boolean
  isCreator?: boolean
}

export const ParticipantField = ({
  add,
  remove,
  isLast,
  isCreator,
}: ParticipantFieldProps) => {
  return (
    <div className="flex flex-wrap items-center gap-1">
      <InputField label="Name" srLabel icon={<User weight="bold" />} />
      <div className="flex items-center gap-1">
        <InputField
          label="Name"
          srLabel
          icon={<WhatsappLogo weight="bold" />}
          type="tel"
        />
        {isCreator ? (
          <button
            className="rounded-full p-1 text-slate-600 hover:text-violet-500"
            title="Add new participant"
            onClick={add}
          >
            <Plus weight="bold" />
            <span className="sr-only">Add new participant</span>
          </button>
        ) : isLast ? (
          <button
            className="rounded-full p-1 text-slate-600 hover:text-violet-500"
            title="Add new participant"
            onClick={add}
          >
            <Plus weight="bold" />
            <span className="sr-only">Add new participant</span>
          </button>
        ) : (
          <button
            className="rounded-full p-1 text-slate-600 hover:text-violet-500"
            title="Add new participant"
            onClick={add}
          >
            <X weight="bold" />
            <span className="sr-only">Remove participant</span>
          </button>
        )}
      </div>
    </div>
  )
}
