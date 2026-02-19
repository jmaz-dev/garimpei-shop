import express, { type Request, type Response } from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from dist/public in production
// On Vercel, files are in dist/public relative to project root
const staticPath = process.env.VERCEL
  ? path.resolve(process.cwd(), "dist", "public")
  : process.env.NODE_ENV === "production"
    ? path.resolve(__dirname, "public")
    : path.resolve(__dirname, "..", "dist", "public");

app.use(express.static(staticPath));

// Handle client-side routing - serve index.html for all routes
app.get("*", (_req: Request, res: Response) => {
  // `sendFile` existe em runtime, mas a tipagem de `Response` no seu setup
  // não está expondo esse método corretamente, então usamos um cast.
  (res as Response & { sendFile: (path: string, options: { root: string }) => void }).sendFile(
    "index.html",
    { root: staticPath },
  );
});

// For Vercel serverless functions
export default app;

// For local development
if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
  async function startServer() {
    const server = createServer(app);
    const port = process.env.PORT || 3000;

    server.listen(port, () => {
      console.log(`Server running on http://localhost:${port}/`);
    });
  }

  startServer().catch(console.error);
}
