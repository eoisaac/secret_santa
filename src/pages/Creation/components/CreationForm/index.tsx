import { Calendar, CurrencyDollar } from 'phosphor-react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { InputField } from '../../../../components/InputField'
import { ParticipantField } from '../ParticipantField'

export const CreationForm = () => {
  const creator = uuidv4()
  const [participants, setParticipants] = useState<string[]>([creator])

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

  const totalParticipants = participants.length
  return (
    <>
      <fieldset
        className="flex max-h-96 w-full flex-col items-center gap-2
      overflow-y-auto p-1"
      >
        <legend>
          <span>{String(totalParticipants).padStart(2, '0')} </span>
          Participants
        </legend>
        <ul className="w-full">
          {participants.map((participant, index) => {
            const isLast = index === totalParticipants - 1

            return (
              <ParticipantField
                key={participant}
                add={handleAddParticipant}
                remove={handleRemoveParticipant}
                isLast={isLast}
                id={participant}
              />
            )
          })}
        </ul>
      </fieldset>
      <fieldset
        className="flex w-full flex-wrap items-center justify-center
      gap-2"
      >
        <legend>Infos</legend>
        <InputField
          label="Budget"
          icon={<CurrencyDollar weight="bold" />}
          type="number"
        />
        <InputField
          label="Date"
          icon={<Calendar weight="bold" />}
          type="date"
        />
      </fieldset>
      <label className="w-full">
        <span>Message</span>
        <textarea
          className="h-48 w-full resize-none rounded-md bg-slate-50 px-2
        py-1 shadow-sm"
          placeholder="Message"
        />
      </label>
    </>
  )
}
