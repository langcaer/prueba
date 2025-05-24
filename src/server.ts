import { serve } from "bun";
import routes from "./routes";
import index from "./routes/web/pages/index.html";

export function startServer() {
    const server = serve({
        hostname: "0.0.0.0",
        port: 4321,
        routes: {
            ...routes,
            "/*": index,
        },
        development: process.env.NODE_ENV !== "production" && {
            hmr: true,
            console: true,
        },
    });

    console.log(`🚀 Server running at ${server.url}`);
}
