import {Hono,Context} from "hono";

const event = new Hono();
event.get("/",(c:Context)=>{
    return c.json({
        success : true,
        message:"Fetching event",
        data : {},
    })
})

export default event;