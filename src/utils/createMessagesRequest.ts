import { MessageRequest, SecretSanta } from '../@types/app'
import { formatCurrency } from './formatCurrency'
import { formatDate } from './formatDate'
import { matchParticipants } from './matchParticipants'

export const createMessagesRequest = (data: SecretSanta): MessageRequest[] => {
  const secretSanta = data
  const participants = matchParticipants(secretSanta.participants)

  const formattedBudget = formatCurrency({
    language: 'pt-BR',
    currency: 'BRL',
    value: secretSanta.budget,
  })

  const formattedDate = formatDate({
    locale: 'pt-BR',
    date: secretSanta.date,
  })

  const requests = participants.map((participant) => {
    const pair = participants.filter((p) => p.id === participant.pair)[0]

    return {
      receiver: participant.number,
      message:
        `Olá, ${participant.name}! 🎄✨\n` +
        `Voce foi convidado para o(a) ${secretSanta.name}, que ocorrerá no dia ${formattedDate} com valor de ${formattedBudget} 💸.\n` +
        `Seu amigo oculto é: *${pair.name}*!🤫🎁` +
        `Mensagem: ${secretSanta.message}`,
    }
  })

  return requests
}
