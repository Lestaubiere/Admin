export type Title = 'family' | 'mr' | 'mrs';

export type Equipment =
  | 'tent'
  | 'caravan'
  | 'folding-caravan'
  | 'camper'
  | 'mobilhome'
  | 'safaritent';

export type Electricity = 'none' | '6' | '10';

export type Booking = {
  id: number;
  title: Title;
  name: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  email: string;
  phoneNumber: string;
  numberOfPets: number;
  equipment: Equipment;
  electricity: Electricity;
  season: number;
  dateOfArrival: string;
  dateOfDeparture: string;
  comment: string | null;
  people: { id: number; dateOfBirth: string; ageAtArrival: number }[];
  createdAt: string;
  updatedAt: string;
};
