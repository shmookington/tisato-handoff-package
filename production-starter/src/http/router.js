import { URL } from "node:url";

function splitPath(pathname) {
  return pathname.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
}

function matchRoute(pattern, pathname) {
  const patternParts = splitPath(pattern);
  const pathParts = splitPath(pathname);
  if (patternParts.length !== pathParts.length) return null;

  const params = {};

  for (let index = 0; index < patternParts.length; index += 1) {
    const expected = patternParts[index];
    const actual = pathParts[index];

    if (expected.startsWith(":")) {
      params[expected.slice(1)] = decodeURIComponent(actual);
      continue;
    }

    if (expected !== actual) return null;
  }

  return params;
}

export function createRouter() {
  const routes = [];

  return {
    register(method, pattern, handler) {
      routes.push({ method, pattern, handler });
    },

    async handle(request, response) {
      const url = new URL(request.url, "http://localhost");

      for (const route of routes) {
        if (route.method !== request.method) continue;
        const params = matchRoute(route.pattern, url.pathname);
        if (!params) continue;
        await route.handler(request, response, { params, url });
        return true;
      }

      return false;
    },
  };
}
