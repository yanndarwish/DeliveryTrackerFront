interface IDData {
  _id: string;
  __v: number;
}

interface InfoData extends IDData {
  active?: boolean;
  createdBy: string;
}

interface MetaData extends InfoData {
  createdAt: string;
  updatedAt: string;
}

export interface PostUser {
  name: string;
}

export type User = PostUser & IDData;

export interface PostDriver {
  firstName: string;
  lastName: string;
  email?: string;
  phone: string;
}

export type Driver = PostDriver & MetaData;

export interface PostClient {
  name: string;
  streetNumber: number;
  streetName: string;
  postalCode: string;
  city: string;
  country?: string;
}

export type Client = PostClient & MetaData;

export interface PostVehicle {
  brand: string;
  model: string;
  immatriculation: string;
}

export type Vehicle = PostVehicle & MetaData;

export interface PostProvider {
  name: string;
  wharehouse?: string;
  headquarter?: string;
  contactName: string;
  contactPhone?: string;
  contactEmail?: string;
}

export type Provider = PostProvider & MetaData;

export interface Link {
  title: string;
  url: string;
  icon: any;
}
