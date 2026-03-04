export interface User {
  id: string;
  email: string;
  name: string;
  role?: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface AuthState {
  isLoggedIn: boolean;
  currentUser: User | null;
}
