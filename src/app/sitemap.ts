import { getPosts } from "@/utils/utils";
import { baseURL, routes as routesConfig } from "@/resources";
import { routing } from "@/i18n/routing";

export default async function sitemap() {
  const locales = routing.locales;

  const blogs = getPosts(["src", "app", "blog", "posts"]).map((post) => ({
    url: `${baseURL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const works = locales.flatMap((locale) => {
    const posts = getPosts(["src", "app", "[locale]", "work", "projects", locale]);
    return posts.map((post) => ({
      url:
        locale === routing.defaultLocale
          ? `${baseURL}/work/${post.slug}`
          : `${baseURL}/${locale}/work/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    }));
  });

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route as keyof typeof routesConfig],
  );

  const routes = locales.flatMap((locale) =>
    activeRoutes.map((route) => ({
      url:
        locale === routing.defaultLocale
          ? `${baseURL}${route !== "/" ? route : ""}`
          : `${baseURL}/${locale}${route !== "/" ? route : ""}`,
      lastModified: new Date().toISOString().split("T")[0],
    })),
  );

  return [...routes, ...blogs, ...works];
}
