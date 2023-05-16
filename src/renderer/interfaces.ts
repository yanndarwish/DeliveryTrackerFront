export interface PostUser {
  name: string;
}

export interface User extends PostUser {
  _id: string;
  __v: number;
}

export interface PostDriver {
  firstName: string;
  lastName: string;
  phone: string;
}

export interface Driver extends PostDriver {
  _id: string;
  __v: number;
  active: boolean;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostClient {
  name: string;
  streetNumber: number;
  streetName: string;
  postalCode: string;
  city: string;
}

export interface Client extends PostClient {
  _id: string;
  __v: number;
  active: boolean;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface Link {
  title: string;
  url: string;
  icon: any;
}
