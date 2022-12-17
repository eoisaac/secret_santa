import { Participant } from '../@types/app'

export const hasDuplicates = (participants: Participant[]) => {
  const participantsIDs = participants.map((p) => p.id)
  // const participantsIDs = participants.map((p) => JSON.stringify(p))
  return new Set(participantsIDs).size !== participants.length
}

export const matchParticipants = (participants: Participant[]) => {
  if (hasDuplicates(participants)) throw Error('Duplicated participants')

  const randomizedParticipants = [...participants].sort(
    () => 0.5 - Math.random(),
  )

  return participants.reduce<Participant[]>((acc, participant) => {
    const match = randomizedParticipants.filter(
      (randomPair) => randomPair.id !== participant.id,
    )[0]

    if (match) {
      participant.pair = match.id

      randomizedParticipants.splice(
        randomizedParticipants.findIndex(
          (randomParticipant) => randomParticipant.id === match.id,
        ),
        1,
      )
    } else {
      participant.pair = acc[0].pair
      acc[0].pair = participant.id
    }

    acc.push(participant)
    return acc
  }, [])
}
