import env from 'env-var'

export const envs = {
  port: env.get('PORT').required().asPortNumber(),
}
