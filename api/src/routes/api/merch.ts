import {Hono,Context} from "hono";
import {PrismaClient} from "@prisma/client";

const merch = new Hono();
const prisma = new PrismaClient();

merch.get("/",(c:Context)=>{
    return c.json({
        success:true,
        message:"Fetching merch",
        data : {},
    })
})
export default merch;