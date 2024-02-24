import { Hono } from "hono"; // import hono
import api from "./routes/api/";

const app = new Hono(); // init hono

app.route("/api", api); // set the route for /api to be handled by the /api router

export default app; // export the app
