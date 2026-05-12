import type { NextConfig } from "next";
import { execSync } from "child_process";

let gitHash = "local";
try {
  gitHash = execSync("git rev-parse --short HEAD").toString().trim();
} catch {
  // fora de um repositório git
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_GIT_HASH: gitHash,
  },
};

export default nextConfig;
