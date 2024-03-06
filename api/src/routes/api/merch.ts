import {Hono,Context} from "hono";
import {PrismaClient} from "@prisma/client";
import {zValidator} from "@hono/zod-validator";
import {z} from "zod";
import {bearerAuth} from "hono/bearer-auth"; 

const merch = new Hono();
const prisma = new PrismaClient();

const token = Bun.env.token as string;

const schema = z.object({
    title : z.string(),
    link:z.string(),
    image:z.string(),
    price:z.number(),
    categoryId:z.number()
})

const zodHandler = zValidator("json",schema,(result,c)=>{
    if(!result.success){
        return c.json({
            success:false,
            message:"Invalid Data",
            data : {},
        },400)
    }
})

merch.get("/",(c:Context)=>{
    return c.json({
        success:true,
        message:"Fetching merch",
        data : {},
    })
})

merch.post("/create",zodHandler,bearerAuth({token}), async (c:Context)=>{
    const data = await c.req.json();
    return c.json({
        success:true,
        message:"Creating File",
        data : data,
    })
})


export default merch;