import { z } from 'zod'

// @todo: create a shared file for zod schemas between web and server
export const secretSantaSchema = z.object({
  eventName: z.string().min(1, 'Event name is required'),

  budget: z
    .array(z.number().min(0, 'Budget values cannot be negative'))
    .length(2, 'Budget must have min and max values'),

  date: z.coerce.date(),

  message: z.string().optional(),
  participants: z
    .array(
      z.object({
        name: z.string().min(1, 'Name is required'),
        phone: z.string().min(1, 'Phone is required'),
      }),
    )
    .min(2, 'Add at least two participants.'),
})
export type SecretSanta = z.infer<typeof secretSantaSchema>

export const createSecretSantaSchema = secretSantaSchema.omit({})
export type CreateSecretSanta = z.infer<typeof createSecretSantaSchema>

export const secretSantaResultSchema = z.object({
  eventName: z.string(),
  results: z.array(
    z.object({
      name: z.string(),
      phone: z.string(),
      status: z.enum(['success', 'invalid-number', 'error']),
      error: z.string().optional(),
    }),
  ),
})

export type SecretSantaResult = z.infer<typeof secretSantaResultSchema>
