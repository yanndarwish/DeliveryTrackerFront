export type ActiveStatus = 'all' | 'true' | 'false';
export type Countries = 'all' | 'france' | 'other';
export type TableNames =
  | 'clients'
  | 'vehicles'
  | 'providers'
  | 'drivers'
  | 'deliveries'
  | 'groups';

export interface ColumnBase {
  label: string;
  accessor: string;
  sortable: boolean;
  type: string;
}

export interface keyable {
  [key: string]: any;
}

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
  group: string[];
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
  contactMail?: string;
}

export type Provider = PostProvider & MetaData;

interface Event {
  client: string;
  date: string;
}

export interface PostDelivery extends CreatedBy {
  provider: string;
  driver: string[];
  vehicle: string[];
  pickups: Event[];
  dropoffs: Event[];
  hotel?: number | null;
}

export type Delivery = PostDelivery & MetaData;

export interface PostGroup extends PostBase {
  name: string;
  clients: string[];
}

export type Group = PostGroup & MetaData;

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
