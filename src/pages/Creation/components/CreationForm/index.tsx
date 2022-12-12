import { useState } from 'react'
import { InputField } from '../../../../components/InputField'
import { ParticipantField } from '../ParticipantField'

export const CreationForm = () => {
  const [participants, setParticipants] = useState<string[]>([])

  const handleAddParticipant = () => {
    setParticipants((prevState) => [...prevState, 'participant'])
  }

  return (
    <>
      <fieldset className="flex flex-col items-center gap-2">
        <legend>Participants</legend>
        <ParticipantField add={handleAddParticipant} isCreator />

        {participants.map((participant, index) => {
          const isLast = index === participants.length - 1

          return (
            <ParticipantField
              key={`${participant}-${index}`}
              add={handleAddParticipant}
              isLast={isLast}
            />
          )
        })}
      </fieldset>
      <fieldset className="flex flex-col items-center gap-2">
        <legend>Properties</legend>
        <InputField label="Budget" type="number" />
        <textarea name="" id="" cols={30} rows={10}></textarea>
      </fieldset>
    </>
  )
}
