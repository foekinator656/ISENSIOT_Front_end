import { User } from '../user.model';

export interface AuthResponseDTO {
  user: User;
  token: string;
}
