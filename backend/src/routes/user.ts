import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { jwt, sign } from "hono/jwt";
import { signinInput, signupInput } from "@saradhipardha/bloggapp-common";



export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();




userRouter.post("/signup",async (c)=>{
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    
    try{
    const user =   await  prisma.user.create({
            data:{
                name: body.name,
                email: body.email,
                password: body.password,
            }
        })
const token = await sign({id: user.id},c.env.JWT_SECRET)

console.log(user)
console.log(token)
        return c.json({
            jwt:token
        })
    }catch(err){
        console.log(err);
        return c.text('invalid')

    }
})


 
userRouter.post('/signin',async (c)=>{
    const body = await c.req.json();

    const { success } = signinInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            message:"Inputs not correct "
        })
    }



    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
    const user = await prisma.user.findUnique({
        where:{
            email:body.email,
            password:body.password
        }
    });

    if(!user){
        c.status(403);
        return c.json({  error: "user not found"   })
    }

const jwt = await sign({  id:user.id  },c.env.JWT_SECRET);

console.log(user)
return c.json({jwt})

}catch(err){
    console.log(err);
    return c.text('invalid')

}
})










