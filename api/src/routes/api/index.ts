import { Hono, Context } from "hono"; // import hono and type context

const api = new Hono(); // initialize hono

// create route /api/greetings
api.get("/greetings", (c: Context) => {
  return c.json({
    success: true,
    message: "Helo Hono",
  });
});

api.get("/merch", (c: Context) => {
  const { category } = c.req.query();
  let message: string;
  if (category) {
    message = `Getting merch with ${category} category`;
  } else {
    message = "Getting all merch";
  }

  return c.json({
    success: true,
    message: message,
    data: {},
  });
});

export default api; // export api variable
