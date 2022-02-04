module.exports = ({ logger, searchZipCodeService }) => {
  const get = async (params) => {
    const { zipCode } = params;

    const startTime = Date.now();
    const response = await searchZipCodeService.getAddressByZipCode({ zipCode });
    const executionTime = Date.now() - startTime;

    logger.debug(`Fetching search results took ${executionTime}ms`);

    return response;
  };

  const isUp = async () => {
    const startTime = Date.now();
    const response = await searchZipCodeService.liveness();
    const executionTime = Date.now() - startTime;

    logger.debug(`Fetching search results took ${executionTime}ms`);

    return response;
  };

  return { get, isUp };
};
