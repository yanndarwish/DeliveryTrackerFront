export interface PostUser {
  name: String;
}

export interface User extends PostUser {
  _id: String;
  __v: Number;
}

export interface Link {
  title: String;
  url: String;
  icon: any;
}
