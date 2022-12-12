import { Calendar, CurrencyDollar } from 'phosphor-react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { FieldErrors } from '../../../../@types/form'
import { InputField } from '../../../../components/InputField'
import { ParticipantField } from '../ParticipantField'

interface CreationFormProps {
  errors: FieldErrors
}

export const CreationForm = ({ errors }: CreationFormProps) => {
  const creator = uuidv4()
  const [participants, setParticipants] = useState<string[]>([creator])
  const totalParticipants = participants.length

  const { register } = useFormContext()

  const handleAddParticipant = () => {
    const id = uuidv4()
    setParticipants((prevState) => [...prevState, id])
  }

  const handleRemoveParticipant = (participantToDelete: string) => {
    const restParticipants = participants.filter(
      (comment) => comment !== participantToDelete,
    )
    setParticipants(restParticipants)
  }

  return (
    <>
      <fieldset
        className="flex max-h-96 w-full flex-col items-center gap-2
      overflow-y-auto px-1 py-4"
      >
        <legend>
          <span>{String(totalParticipants).padStart(2, '0')} </span>
          Participants
        </legend>
        <ul className="flex w-full flex-col gap-3">
          {participants.map((participant, index) => {
            const isLast = index === totalParticipants - 1

            return (
              <ParticipantField
                key={participant}
                add={handleAddParticipant}
                remove={handleRemoveParticipant}
                isLast={isLast}
                id={participant}
                register={register}
                errors={errors}
              />
            )
          })}
        </ul>
      </fieldset>
      <fieldset
        className="flex w-full flex-wrap items-center justify-start
      gap-2"
      >
        <legend>Infos</legend>
        <InputField
          label="Budget"
          icon={<CurrencyDollar weight="bold" />}
          type="number"
          register={register('budget', { required: true })}
          errorMessage={errors.budget && errors.budget.message}
        />
        <InputField
          label="Date"
          icon={<Calendar weight="bold" />}
          type="date"
          register={register('date', { required: true })}
          errorMessage={errors.date && errors.date.message}
        />
      </fieldset>
      <label className="w-full">
        <span>Message</span>
        <textarea
          className="h-48 w-full resize-none rounded-md bg-slate-50 px-2
        py-1 shadow-sm"
          placeholder="Message"
          {...register('message', { required: false })}
        />
        <span>{errors.message && errors.message.message}</span>
      </label>
    </>
  )
}
