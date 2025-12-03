// @todo: create zod schema
// @todo: create a shared file for zod schemas between web and server
interface Participant {
  name: string
  phone: string
  match?: Omit<Participant, 'match'>
}

export const hasDuplicates = (participants: Participant[]) => {
  const phones = participants.map((p) => p.phone)
  return new Set(phones).size !== participants.length
}

export const matchParticipants = (
  participants: Participant[],
): Participant[] => {
  if (hasDuplicates(participants)) throw new Error('Duplicated participants')
  if (participants.length < 2) throw new Error('Need at least 2 participants')

  const shuffled = [...participants].sort(() => 0.5 - Math.random())

  return shuffled.map((participant, index) => {
    const matchIndex = (index + 1) % shuffled.length
    participant.match = {
      name: shuffled[matchIndex].name,
      phone: shuffled[matchIndex].phone,
    }
    return participant
  })
}
