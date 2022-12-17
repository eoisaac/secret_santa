import { MessageRequest } from '../../@types/app'
import { wppMessageSender } from './instances'

export const sendMessages = async (messageRequest: MessageRequest) => {
  const response = await wppMessageSender.post('/messages/send', messageRequest)
  return response.data
}
