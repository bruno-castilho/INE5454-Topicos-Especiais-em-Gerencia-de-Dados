import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.url().default("http://localhost:3333"),
})

const _env = envSchema.safeParse(import.meta.env)

if (_env.success === false) {
  console.error('Invalid environment variables', z.treeifyError(_env.error))

  throw new Error('Invalid environment variables.')
}

export const env = _env.data