import { Hono } from 'hono'
import { blogRouter } from './routes/blog'
import { userRouter } from './routes/user'

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono<{
  Bindings:{
  DATABASE_URL: string;
  }
}>()







app.route('/api/v1/user',userRouter)
app.route('/api/v1/blog',blogRouter)

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTB9.t9Ge2-MVr2DacpsoNIygLjCDXzOu7erkvw_ptdFAqPY"

export default app




