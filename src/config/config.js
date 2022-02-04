const dotenv = require('dotenv');

module.exports = () => {
  if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
  }

  const getNodeEnv = () => {
    const { NODE_ENV } = process.env;

    return NODE_ENV || 'development';
  };

  const getPort = () => {
    const { PORT } = process.env;
    if (!PORT) {
      throw new Error('"PORT" must be defined.');
    }

    return parseInt(PORT, 10);
  };

  const getSearchZipCodeUrl = () => {
    const { SEARCH_ZIP_CODE_BASE_URL } = process.env;

    if (!SEARCH_ZIP_CODE_BASE_URL) {
      throw new Error('"SEARCH_ZIP_CODE_BASE_URL" must be defined.');
    }

    return SEARCH_ZIP_CODE_BASE_URL;
  };

  const getSearchZipCodeTimeout = () => {
    const { SEARCH_ZIP_CODE_TIMEOUT } = process.env;

    if (!SEARCH_ZIP_CODE_TIMEOUT) {
      throw new Error('"SEARCH_ZIP_CODE_TIMEOUT" must be defined.');
    }

    return parseInt(SEARCH_ZIP_CODE_TIMEOUT, 10);
  };

  return {
    nodeEnv: getNodeEnv(),
    port: getPort(),
    searchZipCodeUrl: getSearchZipCodeUrl(),
    searchZipCodeTimeout: getSearchZipCodeTimeout()
  };
};
