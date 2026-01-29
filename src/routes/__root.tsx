import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import portfolioData from "../data/data.json";

const { profile, roles } = portfolioData;
const siteTitle = `${profile.name} | Portfolio`;
const siteDescription = profile.bio;
const siteUrl = import.meta.env.VITE_SITE_URL || "http://localhost:3000";
const ogImage = `${siteUrl}/assets/ogimg.png`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: siteTitle },
      { name: "description", content: siteDescription },
      { name: "author", content: profile.name },
      { name: "keywords", content: roles.join(", ") },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteUrl },
      { property: "og:title", content: siteTitle },
      { property: "og:description", content: siteDescription },
      { property: "og:image", content: ogImage },
      { property: "og:site_name", content: profile.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: siteUrl },
      { name: "twitter:title", content: siteTitle },
      { name: "twitter:description", content: siteDescription },
      { name: "twitter:image", content: ogImage },
      { name: "theme-color", content: "#0a0a0a" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/x-icon", href: "/logo/web/favicon.ico" },
      { rel: "apple-touch-icon", href: "/logo/web/apple-touch-icon.png" },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
});

function NotFound() {
  return (
    <div className="min-h-[70vh] px-6 py-12 flex items-center justify-center">
      <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-gradient-to-tr from-white/10 via-white/5 to-transparent blur-3xl" />

        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">404</p>
          <h1 className="mt-3 text-2xl sm:text-3xl font-semibold text-white">Page not found</h1>
          <p className="mt-2 text-sm sm:text-base text-white/70">
            The page you’re looking for doesn’t exist or has been moved.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-white text-black hover:bg-white/90 transition"
            >
              Back to home
            </a>
            <a
              href="mailto:me@amrizadi.my.id"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border border-white/20 text-white/90 hover:border-white/40 transition"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>{children}<Scripts /></body>
    </html>
  );
}
