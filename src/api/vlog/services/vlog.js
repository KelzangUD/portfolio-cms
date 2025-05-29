'use strict';

/**
 * vlog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vlog.vlog');
