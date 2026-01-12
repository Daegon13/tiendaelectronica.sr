import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1]; // owner/repo
const owner = process.env.GITHUB_REPOSITORY?.split("/")[0];
const base = process.env.BASE_PATH ?? (repo ? `/${repo}/` : "/");
const site = process.env.SITE_URL ?? (owner ? `https://${owner}.github.io` : "https://example.com");

export default defineConfig({
  integrations: [tailwind()],
  site,
  base
});
