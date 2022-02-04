const config = require('./config');

jest.mock('dotenv', () => ({
  config: jest.fn()
}));

beforeEach(() => {
  process.env.NODE_ENV = 'development';
  process.env.PORT = '3000';
  process.env.SEARCH_ZIP_CODE_BASE_URL = 'http://localhost:3000';
  process.env.SEARCH_ZIP_CODE_TIMEOUT = '2000';

  jest.resetAllMocks();
});

describe('config()', () => {
  it('should call config return variables', () => {
    expect(config()).toEqual({
      nodeEnv: 'development',
      port: 3000,
      searchZipCodeUrl: 'http://localhost:3000',
      searchZipCodeTimeout: 2000
    });
  });

  it('should set node env like "production"', () => {
    process.env.NODE_ENV = 'production';

    expect(config().nodeEnv).toEqual('production');
  });

  it('should throw error missing node env variable', () => {
    delete process.env.NODE_ENV;

    expect(config().nodeEnv).toEqual('development');
  });

  it('should throw error missing port variable', () => {
    delete process.env.PORT;

    expect(() => config()).toThrowError('"PORT" must be defined.');
  });

  it('should throw error missing search zip code url variable', () => {
    delete process.env.SEARCH_ZIP_CODE_BASE_URL;

    expect(() => config()).toThrowError('"SEARCH_ZIP_CODE_BASE_URL" must be defined.');
  });

  it('should throw error missing search zip code timeout variable', () => {
    delete process.env.SEARCH_ZIP_CODE_TIMEOUT;

    expect(() => config()).toThrowError('"SEARCH_ZIP_CODE_TIMEOUT" must be defined.');
  });
});
