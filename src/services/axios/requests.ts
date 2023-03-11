import { MessageRequest } from '../../@types/app'
import { wppMessageSender } from './instances'

export const sendMessages = async (messages: MessageRequest[]) => {
  const response = await wppMessageSender.post('/messages/send', messages)
  return response.data
}
