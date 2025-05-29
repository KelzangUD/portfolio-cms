module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: ['*'], // Allow all origins
      methods: ['*'], // Allow all HTTP methods
      headers: ['*'], // Allow all headers
      credentials: true, // Allow credentials (cookies, auth headers, etc.)
    },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
