// src/routes/index.ts
import { Glob } from "bun";
import { join } from "path";

const glob = new Glob("*.route.ts");
const routes: Record<string, any> = {};

const basePath = import.meta.dir;

// Cargar rutas de API
for await (const file of glob.scan({ cwd: join(basePath, "api") })) {
    const modulePath = join(basePath, "api", file);
    const routeModule = await import(`file://${modulePath}`);
    if (routeModule.default) {
        Object.assign(routes, routeModule.default);
    }
}

// Cargar rutas web, si las tienes
for await (const file of glob.scan({ cwd: join(basePath, "web") })) {
    const modulePath = join(basePath, "web", file);
    const routeModule = await import(`file://${modulePath}`);
    if (routeModule.default) {
        Object.assign(routes, routeModule.default);
    }
}

export default routes;
