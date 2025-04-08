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

export type INewPost = {
  userId: string;
  caption: string;
  file: File[];
  location?: string;
  tags?: string;
};

export type IUpdateOrder = {
  orderId: string
  bording_point: string;
  bording_date: string;
  bording_time_frame: string;
  departure_time: string;
  destination_point: string;
  returning_date: string;
  returning_time_frame: string;
  returning_time: string;
  agreed_amount: string;
  advance_amount: string;
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
