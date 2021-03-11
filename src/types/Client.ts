import { Title } from '.';
import { Booking } from './Booking';

export type ClientFilters = {
  search?: string;
};

export type Client = {
  id: number;
  title: Title;
  name: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
  bookings?: Booking[];
};
