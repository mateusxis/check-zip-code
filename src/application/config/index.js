if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const { PORT } = process.env;

module.exports = {
  port: PORT || 3000
};
