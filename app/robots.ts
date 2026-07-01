import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/live/",
        "/pet/",
        "/referral/",
        "/tutor-referral/",
        "/c/",
      ],
    },
    sitemap: "https://aumigaowalk.com.br/sitemap.xml",
  };
}
