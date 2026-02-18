import Fastify from "fastify";

const app = Fastify({ logger: true });

app.get("/hello", async () => {
  return { message: "hello" };
});

app.listen({ port: 3000, host: "0.0.0.0" });
