// next.config.mjs

const isProd = process.env.NODE_ENV === 'production';

export default (phase) => {
  return {
    basePath: isProd ? '/resume' : '',
    assetPrefix: isProd ? '/resume/' : '',
    reactStrictMode: true,
  };
};
