module.exports = process.env.MODEL_CACHE_COV
  ? require('./lib-cov')
  : require('./lib');
