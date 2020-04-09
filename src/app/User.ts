export interface User {
  id: number;
  login: string;
  password: string;
  liked: number[];
  myOrders: number[];
}
