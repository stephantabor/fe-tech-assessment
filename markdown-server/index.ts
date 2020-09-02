import * as fastify from "fastify";
import marked from "marked";
import { Server, IncomingMessage, ServerResponse } from "http";

const server = fastify.fastify({ logger: true });

const opts: fastify.RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          status: {
            type: "string",
          },
        },
      },
    },
  },
};

server.get("/health", opts, async (request, reply) => {
  return { status: "ok" };
});

server.post("/markdown", async (request, reply) => {
  return marked(request.body as string);
});

server.listen(3333, '::', (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  const address = server?.server?.address();
  const port = typeof address === 'string' ? address : address === null ? '' : address.port;
  if (port) {
    server.log.info(`server listening on ${port}`);
  }
});
