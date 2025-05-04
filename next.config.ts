import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    AI_API_TOKEN: "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",
    REACT_APP_FIREBASE_API_KEY:"AIzaSyDBbd5NkJqYe883OmSwQg4McQ1c8T_WUmw",
    REACT_APP_FIREBASE_AUTH_DOMAIN:"boorchi-project.firebaseapp.com",
    REACT_APP_FIREBASE_PROJECT_ID:"boorchi-project",
    REACT_APP_FIREBASE_STORAGE_BUCKET:"boorchi-project.appspot.com",
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"155794189041",
    REACT_APP_FIREBASE_APP_ID:"1:155794189041:web:1:155794189041:web:f9a355f6a16d32584e9750",
  },
};
module.exports = {
  images: {
    domains: ["media.rawg.io", "www.blockchaingamer.biz"],
  },
};

export default nextConfig;
