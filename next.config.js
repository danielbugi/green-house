/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_PASSWORD: 'Db19931993',
    GOOGLE_MAP_KEY: 'AIzaSyCZtwzp0wybLs4jPcUbIg4Z315EsE4BAX0',
    STRIPE_PUBLISHABLE_KEY:
      'pk_test_51OQqOJEdiB59sGdcCuftBBzvmoujuX55wBtcCDpov6OMxgDjtZ7WSe4HpqIbj2gol455RkS9kdcM3gntmXIwQN94005uP3kxh8',
    STRIPE_SECRET_KEY:
      'sk_test_51OQqOJEdiB59sGdcrnbBZNg2co2Q7rKdhwdV086KARQsdBHIbUEEqNkBU3ysSupBAxvZmOAMrk4CRQo9ZrwBl1we00VwgKRwPI',
  },
};

module.exports = nextConfig;
