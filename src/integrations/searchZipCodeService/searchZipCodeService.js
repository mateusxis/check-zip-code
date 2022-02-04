const { inspect } = require('util');
const request = require('axios');

module.exports = ({ config, logger }) => {
  const { searchZipCodeUrl: baseUrl, searchZipCodeTimeout: timeout } = config;

  const getAddressByZipCode = async ({ zipCode }) => {
    if (!zipCode) {
      throw new Error('No "zipCode" provided.');
    }

    const payload = {
      code: zipCode
    };

    const emptyResponse = {
      status: 404,
      ok: false,
      message: 'CEP não encontrado',
      statusText: 'not_found'
    };

    try {
      const response = await request({
        url: baseUrl,
        method: 'GET',
        params: payload,
        timeout
      });

      return response.data;
    } catch (error) {
      if (error.code === 'ECONNABORTED') {
        throw new Error(`Request timeout: Could not fetch search results in ${timeout}ms`);
      }

      if (!error.response) {
        throw new Error(error.message);
      }

      const { status, data } = error.response;

      if (status === 404) {
        return emptyResponse;
      }

      throw new Error(`Could not fetch search results: ${status} - ${inspect(data)}`);
    }
  };

  const liveness = async () => {
    try {
      const response = await request({
        url: baseUrl,
        method: 'GET',
        params: {
          code: '06233030'
        },
        timeout
      });

      return response.status === 200;
    } catch (error) {
      logger.error('ZipCode api is not alive, theres an error:', { error });
      return false;
    }
  };

  return {
    getAddressByZipCode,
    liveness
  };
};
