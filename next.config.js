const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [
    optimizedImages,
    {
      handleImages: ['jpeg', 'png', 'svg', 'webp', 'jpg'],
    },
  ],
]);

module.exports = {
  images: {
    domains: ['i.ibb.co'],
  },
};
