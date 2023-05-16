interface IDData {
  _id: string;
  __v: number;
}

interface CreatedBy {
  createdBy: string;
}

interface Active {
  active?: boolean;
}

interface PostBase extends CreatedBy, Active {}

interface MetaData extends IDData {
  createdAt: string;
  updatedAt: string;
}

export interface PostUser {
  name: string;
}

export type User = PostUser & IDData;

export interface PostDriver extends PostBase {
  firstName: string;
  lastName: string;
  email?: string;
  phone: string;
}

export type Driver = PostDriver & MetaData;

export interface PostClient extends PostBase {
  name: string;
  streetNumber: number;
  streetName: string;
  postalCode: string;
  city: string;
  country?: string;
}

export type Client = PostClient & MetaData;

export interface PostVehicle extends PostBase {
  brand: string;
  model: string;
  immatriculation: string;
}

export type Vehicle = PostVehicle & MetaData;

export interface PostProvider extends PostBase {
  name: string;
  wharehouse?: string;
  headquarter?: string;
  contactName: string;
  contactPhone?: string;
  contactEmail?: string;
}

export type Provider = PostProvider & MetaData;

interface Event {
  client: string;
  date: string;
}

export interface PostDelivery extends CreatedBy {
  provider: string;
  driver: string;
  vehicle: string;
  pickups: Event[];
  dropoffs: Event[];
  hotel?: number;
}

export type Delivery = PostDelivery & MetaData;

export interface DeliveryParams {
  driver?: string;
  provider?: string;
  client?: string;
  vehicle?: string;
  hotel?: boolean;
  year?: number;
  month?: number;
  sort?: any;
}

export interface Link {
  title: string;
  url: string;
  icon: any;
}
