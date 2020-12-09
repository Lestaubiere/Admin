import * as authentication from './authentication';
import * as bookings from './bookings';

type Environment = 'local' | 'production';

type Config = {
  environment: Environment;
};

export class LestaubiereApi {
  public static getInstance(): LestaubiereApi {
    if (!LestaubiereApi.instance) {
      LestaubiereApi.instance = new LestaubiereApi();
    }

    return LestaubiereApi.instance;
  }

  private static instance: LestaubiereApi;

  private environment: Environment = 'production';

  private constructor(config?: Config) {
    if (config?.environment) {
      this.environment = config.environment;
    }
  }

  protected getBaseUrl(): string {
    if (this.environment === 'local') {
      return 'http://localhost:3333/api';
    }

    return 'https://api.lestaubiere.com/api';
  }

  protected getHeaders(): Headers {
    const headers: Headers = new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    });

    return headers;
  }

  public setEnvironment(environment: Environment) {
    this.environment = environment;
  }

  public getEnvironment(): Environment {
    return this.environment;
  }

  // AUTHENTICATION
  public login = authentication.login;
  public getCurrentUser = authentication.getCurrentUser;
  // BOOKING
  public getBookings = bookings.getBookings;
}
