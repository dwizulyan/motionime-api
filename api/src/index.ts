import { Hono } from "hono"; // import hono
import api from "./routes/api/";
import {logger} from "hono/logger";

const app = new Hono(); // init hono

app.use("*",logger());

app.route("/api/merch", api.merch);
app.route("/api/banner",api.banner);
app.route("/api/event",api.event);
app.route("/api/category",api.category);
export default app; // export the app
