import type { NextConfig } from "next";
import path from "node:path";

const hasCustomDomain = process.env.CUSTOM_DOMAIN === "true";
const isPagesBuild = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
// Set only for Builder preview builds, which are served under a URL
// prefix. Empty for published builds, which are served at the domain root.
const previewBasePath = process.env.PREVIEW_BASE_PATH ?? "";
const basePath = previewBasePath;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
