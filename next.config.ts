import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    AI_API_TOKEN: "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",
  },
};
module.exports = {
  images: {
    domains: ["media.rawg.io", "www.blockchaingamer.biz"],
  },
};

export default nextConfig;
