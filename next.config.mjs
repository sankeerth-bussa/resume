// next.config.mjs

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // basePath: isProd ? '/resume' : '',
  // assetPrefix: isProd ? '/resume/' : '',
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
