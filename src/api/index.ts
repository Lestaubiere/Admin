import { io, Socket } from 'socket.io-client';

import * as app from './app';
import * as authentication from './authentication';
import * as bookings from './bookings';
import * as clients from './clients';

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

  public static getSocket(): Socket {
    if (!LestaubiereApi.socket) {
      LestaubiereApi.socket = io(LestaubiereApi.instance.getBaseUrl());
    }

    return LestaubiereApi.socket;
  }

  private static instance: LestaubiereApi;

  public static socket: Socket;

  private environment: Environment = 'production';

  private constructor(config?: Config) {
    if (config?.environment) {
      this.environment = config.environment;
    }
  }

  protected getBaseUrl(): string {
    if (this.environment === 'local') {
      return 'http://localhost:3333';
    }

    return 'https://api.lestaubiere.com';
  }

  protected getBaseApiUrl(): string {
    return `${this.getBaseUrl()}/api`;
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

  // APP
  public getStatistics = app.getStatistics;
  // AUTHENTICATION
  public login = authentication.login;
  public getCurrentUser = authentication.getCurrentUser;
  // BOOKING
  public getBookings = bookings.getBookings;
  public setBookingAsPending = bookings.setBookingAsPending;
  // CLIENTS
  public getClient = clients.getClient;
  public getClients = clients.getClients;
}
