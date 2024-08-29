import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/api/webhook"],
  beforeAuth: (req) => {
    console.log('Middleware processing route:', req.nextUrl.pathname);
  },
});

export const config = {
  // The matcher now excludes public routes and assets (_next, files, etc.)
  matcher: [
    "/((?!.*\\..*|_next|api/webhook).*)", // Matches all routes except those starting with a dot, _next, or /api/webhook
    "/(api|trpc)(.*)", // Matches all routes under /api and /trpc
  ],
};