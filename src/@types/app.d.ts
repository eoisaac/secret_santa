export interface Participant {
  id: string
  name: string
  number: string
  pair: string
}

export interface SecretSanta {
  name: string
  budget: number
  date: Date
  message?: string
  participants: Participant[]
}

export interface MessageRequest {
  receiver: string
  message: string
}
