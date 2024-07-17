interface User {
  id: string;
  name: string;
  dob?: Date;
  password: string;
  email: string;
}

export interface Userdata {
  data: User;
  msg: string;
  status: number;
  token: string;
}

export interface TableUser {
  id: number;
  name: string;
  dateCreated: string;
  role: string;
  status: string;
  statusColor: string;
}
