const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::address.address', {
  async find(ctx) {
    const { results } = await strapi.service('api::address.address').find();

    ctx.body = await this.sanitizeOutput(results, ctx);
  },

  async create(ctx) {
    const { data } = await strapi.service('api::address.address').create(ctx.request.body);

    ctx.body = await this.sanitizeOutput(data, ctx);
  },

  async update(ctx) {
    const { id } = ctx.params;
    const { data } = await strapi.service('api::address.address').update(id, ctx.request.body);

    ctx.body = await this.sanitizeOutput(data, ctx);
  },

  async delete(ctx) {
    const { id } = ctx.params;
    const { data } = await strapi.service('api::address.address').delete(id);

    ctx.body = await this.sanitizeOutput(data, ctx);
  },
});
