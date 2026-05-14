import { createServer } from "node:http";
import { config } from "./src/config.js";
import { createRouter } from "./src/http/router.js";
import { registerRoutes } from "./src/http/routes.js";
import { serveStatic } from "./src/http/static.js";
import { json } from "./src/http/responses.js";

const router = createRouter();
registerRoutes(router);

const server = createServer(async (request, response) => {
  try {
    const handled = await router.handle(request, response);
    if (handled) return;

    const staticHandled = await serveStatic(request, response);
    if (staticHandled) return;

    json(response, 404, {
      success: false,
      error: "Not found",
    });
  } catch (error) {
    console.error(error);
    json(response, 500, {
      success: false,
      error: "Internal server error",
    });
  }
});

server.listen(config.port, () => {
  console.log(`TISATO starter running at ${config.publicOrigin}`);
  console.log("Static site: /");
  console.log("Admin portal: /admin.html");
});
