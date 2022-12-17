import axios from 'axios'

const MESSAGE_SENDER_URL = import.meta.env.VITE_MESSAGE_SENDER_URL

export const wppMessageSender = axios.create({
  baseURL: MESSAGE_SENDER_URL,
})
