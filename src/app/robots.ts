import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE.site}/sitemap.xml`,
  };
}
