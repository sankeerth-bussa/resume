// next.config.mjs

const isProd = process.env.NODE_ENV === 'production';

export default {
  basePath: isProd ? '/resume' : '',
  assetPrefix: isProd ? '/resume/' : '',
  reactStrictMode: true,
  output: 'export',
};
