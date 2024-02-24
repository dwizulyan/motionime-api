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
  let message = "Getting all merch";

  if (category) {
    message = `Getting merch with ${category} category`;
  }

  return c.json({
    success: true,
    message: message,
    data: {},
  });
});

api.get("/banner", (c: Context) => {
  const { category } = c.req.query();
  let message = "Getting all banner";

  if (category) {
    message = `Getting banner with ${category} category`;
  }

  return c.json({
    success: true,
    message: message,
    data: {},
  });
});

api.get("/event", (c: Context) => {
  const { category } = c.req.query();
  let message = "Getting all event";

  if (category) {
    message = `Getting event with ${category} category`;
  }

  return c.json({
    success: true,
    message: message,
    data: {},
  });
});

export default api; // export api variable
