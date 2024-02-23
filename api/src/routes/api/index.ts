import { Hono, Context } from "hono"; // import hono and type context

const api = new Hono(); // initialize hono

// create route /api/
api.get("/greetings", (c: Context) => {
  return c.json({
    success: true,
    message: "Helo Hono",
  });
});

export default api; // export api variable
