import { Calendar, CurrencyDollar, PencilSimple } from 'phosphor-react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { FieldErrors } from '../../../../@types/form'
import { InputField } from '../../../../components/InputField'
import { TextField } from '../../../../components/TextField'
import { ParticipantField } from '../ParticipantField'

interface CreationFormProps {
  errors: FieldErrors
}

export const CreationForm = ({ errors }: CreationFormProps) => {
  const { register, control } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'participants',
  })
  const totalParticipants = fields.length

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
          {fields.map(({ id }, index) => {
            const isLast = index === totalParticipants - 1

            return (
              <ParticipantField
                key={id}
                id={id}
                index={index}
                isLast={isLast}
                errors={errors}
                add={append}
                remove={remove}
                register={register}
              />
            )
          })}
        </ul>
      </fieldset>
      <fieldset
        className="flex w-full flex-col items-center justify-start
      gap-2"
      >
        <legend>Infos</legend>
        <InputField
          label="Name"
          icon={<PencilSimple weight="bold" />}
          register={register('name', { required: true })}
          errorMessage={errors.name && errors.name.message}
        />

        <div
          className="flex w-full flex-col items-center justify-start
      gap-2 sm:flex-row"
        >
          <InputField
            label="Budget"
            icon={<CurrencyDollar weight="bold" />}
            type="number"
            register={register('budget', { required: true })}
            placeholder="15,00"
            errorMessage={errors.budget && errors.budget.message}
          />
          <InputField
            label="Date"
            icon={<Calendar weight="bold" />}
            type="date"
            register={register('date', { required: true })}
            errorMessage={errors.date && errors.date.message}
          />
        </div>
        <TextField
          label="Message"
          placeholder="Message"
          register={register('message', { required: false })}
          errorMessage={errors.message && errors.message.message}
        />
      </fieldset>
    </>
  )
}
