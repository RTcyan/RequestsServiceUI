export interface AuthUser {
    username: string;
    nickname: string;
    email: string;
    phone: string;
    roles: string[];
    meta?: { [key: string]: unknown; favorites?: string[] };
  }
  