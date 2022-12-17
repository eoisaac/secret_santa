import { v4 as uuidv4 } from 'uuid'
import { beforeEach, describe, expect, it } from 'vitest'
import { matchParticipants } from '../matchParticipants'

describe('create new order', () => {
  const PARTICIPANTS_AMOUNT = 5
  let participants = [...new Array(PARTICIPANTS_AMOUNT)]

  beforeEach(() => {
    participants = participants.map((p, index) => ({
      id: uuidv4(),
      name: `John Doe ${index}`,
      number: `+55001234-567${index}`,
      pair: '',
    }))
  })

  it('should every participant have a secret santa', () => {
    const matchedParticipants = matchParticipants(participants)
    const everyoneHasAPair = matchedParticipants.every((p) => Boolean(p.pair))

    expect(everyoneHasAPair).toBe(true)
  })

  it('should participant pair id be different of participant id', () => {
    const matchedParticipants = matchParticipants(participants)
    const everyoneHasAPair = matchedParticipants.every((p) => p.pair !== p.id)

    expect(everyoneHasAPair).toBe(true)
  })

  it('should throw an Error when are duplicated ids', () => {
    const duplicateParticipantsIDs = () => {
      participants[0].id = participants[1].id
      matchParticipants(participants)
    }
    expect(duplicateParticipantsIDs).toThrow(Error('Duplicated participants'))
  })

  it('should return an array with the same size of original', () => {
    const matchedParticipants = matchParticipants(participants)
    expect(matchedParticipants.length).toBe(PARTICIPANTS_AMOUNT)
  })
})
