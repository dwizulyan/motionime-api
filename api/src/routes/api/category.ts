import {Hono,Context} from "hono";
import {PrismaClient} from "@prisma/client";

const category = new Hono();
const prisma = new PrismaClient();

category.get("/",(c:Context)=>{
    return c.json({
        success:true,
        message:"Fetching category",
        data : {},
    })
})

export default category;
