import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [ new URL("https://woiwumpnbnbfmlrqnbvq.supabase.co/storage/v1/object/public/file-project//my-profile.jpg")]
  }
  /* config options here */
};

export default nextConfig;
