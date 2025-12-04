import { z } from 'zod'

const baseParticipant = z.object({
  name: z.string(),
  phone: z.string(),
})
export type BaseParticipant = z.infer<typeof baseParticipant>

export const participantSchema = z.lazy(() =>
  baseParticipant.extend({ match: baseParticipant }),
)
export type Participant = z.infer<typeof participantSchema>
