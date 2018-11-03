const Stripe = require('stripe');

module.exports = class BaseService {
  constructor (options = {}) {
    if (!options.secretKey) {
      throw new Error('Stripe `secretKey` needs to be provided');
    }

    this.stripe = Stripe(options.secretKey);
    this.events = options.events || [];
    this.paginate = options.paginate = {};
    this.id = 'id';
  }
};
