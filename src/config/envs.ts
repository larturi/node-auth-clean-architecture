import env from 'env-var'

export const envs = {
  PORT: env.get('PORT').required().asPortNumber(),
  MONGO_URI: env.get('MONGO_URI').required().asString(),
  MONGO_DB_NAME: env.get('MONGO_DB_NAME').required().asString(),
}
