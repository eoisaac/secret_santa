// @todo: create a shared file for zod schemas between web and server

import {
  BaseParticipant,
  Participant,
  participantSchema,
} from '@/@types/schemas/participant.schema'

export const hasDuplicates = (participants: BaseParticipant[]) => {
  const phones = participants.map((p) => p.phone)
  return new Set(phones).size !== participants.length
}

export const matchParticipants = (
  participants: BaseParticipant[],
): Participant[] => {
  if (hasDuplicates(participants)) throw new Error('Duplicated participants')
  if (participants.length < 2) throw new Error('Need at least 2 participants')

  const shuffled = [...participants].sort(() => 0.5 - Math.random())
  return shuffled.map((participant, index) => {
    const matchIndex = (index + 1) % shuffled.length
    return participantSchema.parse({
      ...participant,
      match: shuffled[matchIndex],
    })
  })
}
