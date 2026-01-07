declare type User = {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  createdAt: string;
};

declare type RegisterFields = {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
};

declare interface RegisterResponse {
  message: string;
  user: User;
  token: string;
}

declare type LoginFields = {
  email: string;
  password: string;
};

declare interface LoginResponse {
  message: string;
  user: User;
  token: string;
}
