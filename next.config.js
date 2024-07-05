// next.config.js
module.exports = {
  experimental: {
    appDir: true,
  },
  env: {
    NEXT_PUBLIC_KAKAO_REST_API_KEY: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY,
    NEXT_PUBLIC_KAKAO_REDIRECT_URI: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    NEXT_PUBLIC_GOOGLE_REDIRECT_URI:
      process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
  },
  reactStrictMode: true,
};
