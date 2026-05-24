import { z } from 'zod'

const envSchema = z.object({
  MODE: z.enum(['development', 'production', 'test']),
})

export const env = envSchema.parse(import.meta.env)
