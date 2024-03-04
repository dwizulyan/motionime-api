import {Hono,Context} from "hono";

const merch = new Hono();

merch.get("/",(c:Context)=>{
    return c.json({
        success:true,
        message:"Fetching merch",
        data : {},
    })
})

export default merch;