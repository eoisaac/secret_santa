export interface BaseParticipant {
  name: string
  number: string
}

export interface Participant extends BaseParticipant {
  pair: Participant
}

export interface SecretSanta {
  name: string
  budget: number
  date: Date
  message?: string
  participants: Participant[]
}
