import { User } from "./user.model";
import { Frituur } from "./frituur.model";

export interface Location {
  id: number;
  name: string;
  users: User[];
  frituurs: Frituur[];
}
