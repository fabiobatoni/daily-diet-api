import fastify from 'fastify'
// import { userRoutes } from './routes/user.js'
import cookie from '@fastify/cookie'

export const app = fastify()

app.register(cookie)
app.register(userRoutes, {
  prefix: 'user',
})
