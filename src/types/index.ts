export type INavLink = {
  imgURL: string;
  route: string;
  label: string;
};

export type IUpdateUser = {
  userId: string;
  name: string;
  bio: string;
  imageId: string;
  imageUrl: URL | string;
  file: File[];
};

export type INewOrder = {
  bus_no: any;
  owner_name: any;
  bording_point: string;
  bording_date: string;
  bording_time: string;
  bording_time_frame: string;
  departure_time: string;
  destination_point: string;
  returning_date: string;
  returning_time_frame: string;
  returning_time: string;
  agreed_amount: string;
  advance_amount: string;
  party_name: string;
  party_address: string;
};

export type IUpdateOrder = {
  bus_no: any;
  owner_name: any;
  orderId: string
  bording_point: string;
  bording_date: string;
  bording_time: string;
  bording_time_frame: string;
  departure_time: string;
  destination_point: string;
  returning_date: string;
  returning_time_frame: string;
  returning_time: string;
  agreed_amount: string;
  advance_amount: string;
  party_name: string;
  party_address: string;
};

export type IUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  imageUrl: string;
  bio: string;
};

export type INewUser = {
  name: string;
  email: string;
  username: string;
  password: string;
};
