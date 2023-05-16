export interface MetaData {
  _id: string;
  __v: number;
}

export interface FullMetaData extends MetaData {
  active: boolean;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostUser {
  name: string;
}

export type User = PostUser & MetaData;

export interface PostDriver {
  firstName: string;
  lastName: string;
  phone: string;
}

export type Driver = PostDriver & FullMetaData;

export interface PostClient {
  name: string;
  streetNumber: number;
  streetName: string;
  postalCode: string;
  city: string;
}

export type Client = PostClient & FullMetaData;

export interface PostVehicle {
  brand: string;
  model: string;
  immatriculation: string;
}

export type Vehicle = PostVehicle & FullMetaData;

export interface Link {
  title: string;
  url: string;
  icon: any;
}
