import { Participant } from '@/@types/schemas/participant.schema'
import { CreateSecretSanta } from '@/@types/schemas/secret-santa.schema'
import { formatCurrency, formatDate } from '@/utils/format'

export const getParticipantMessage = (
  participant: Participant,
  event: CreateSecretSanta,
): string => {
  const formattedDate = formatDate(event.date, 'pt-BR')

  const min = event.budget[0]
  const max = event.budget[1]

  const minBudget = formatCurrency(min, 'pt-BR', { currency: 'BRL' })
  const maxBudget = formatCurrency(max, 'pt-BR', { currency: 'BRL' })

  const formattedBudget =
    min === max ? minBudget : `${minBudget} a ${maxBudget}`

  const budgetBlock =
    min === 0 && max === 0
      ? `Este evento não possui valor definido para os presentes. 🎁\n\n`
      : `O valor para os presentes será de *${formattedBudget}*. 💸\n\n`

  const messageBlock = event.message
    ? `Mensagem especial:\n${event.message}\n\n`
    : ''

  return (
    `Olá, ${participant.name}! 🎄✨\n` +
    `Você foi convidado para participar do(a) *${event.eventName}* 🎁\n` +
    `O evento acontecerá no dia *${formattedDate}*.\n\n` +
    budgetBlock +
    `Seu amigo oculto é: *${participant.match!.name}* 🤫🎁\n\n` +
    messageBlock +
    `Boas festas! ✨🎅`
  )
}
