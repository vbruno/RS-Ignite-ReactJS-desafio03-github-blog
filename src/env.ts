import { z } from 'zod'

const envSchema = z.object({
  github_user: z.string(),
  github_repository: z.string(),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error(
    'Invalid environment variables. Please make sure to create a .env file with the following variables:',
    parsedEnv.error.flatten().fieldErrors,
  )

  throw new Error('Invalid environment variables.')
}

export const env = parsedEnv.data
