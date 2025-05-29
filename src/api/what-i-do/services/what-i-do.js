'use strict';

/**
 * what-i-do service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::what-i-do.what-i-do');
