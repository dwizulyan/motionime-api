import { Hono } from "hono"; // import hono
import api from "./routes/api/";

const app = new Hono(); // init hono

app.route("/api/merch", api.merch);
app.route("/api/banner",api.banner);
app.route("/api/event",api.event);
export default app; // export the app
