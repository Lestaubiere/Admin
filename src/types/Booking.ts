export type Status = 'new' | 'pending' | 'canceled' | 'passed';

export enum Statuses {
  NEW = 'new',
  PENDING = 'pending',
  CANCELED = 'canceled',
  PASSED = 'passed',
}

export enum StatusMapper {
  new = 'Nouveau',
  pending = 'En cours',
  canceled = 'Annulé',
  passed = 'Passée',
}

export type Title = 'family' | 'mr' | 'mrs';

export enum TitleMapper {
  family = 'Famille',
  mr = 'Monsieur',
  mrs = 'Madame',
}

export type Equipment =
  | 'tent'
  | 'caravan'
  | 'folding-caravan'
  | 'camper'
  | 'mobilhome'
  | 'safaritent';

export enum EquipmenteMapper {
  tent = 'Tente',
  caravan = 'Caravane',
  'folding-caravan' = 'Tente roulotte',
  camper = 'Camping-car',
  mobilhome = 'Mobilhome',
  safaritent = 'Tente safari',
}

export type Electricity = 'none' | '6' | '10';

export enum ElectricityMapper {
  none = 'Aucun',
  six = '6 ampères',
  ten = '10 ampères',
}

export type BookingFilters = {
  status?: Status;
  season?: string;
  search?: string;
};

export type Booking = {
  id: number;
  status: Status;
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
