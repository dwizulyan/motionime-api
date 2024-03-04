import {Hono,Context} from "hono";
 
const banner = new Hono();

banner.get("/",(c:Context)=>{
    return c.json({
        success:true,
        message:"Fetching banner",
        data:{},
    })
})

export default banner;