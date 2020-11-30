import { AuthEmployee } from './AuthEmployee';

export interface AuthUser {
    accessFailedCount: number;
    concurrencyStamp: string;
    email: string;
    emailConfirmed: boolean;
    employee: AuthEmployee;
    id: number;
    lockoutEnabled: boolean
    normalizedEmail: string;
    normalizedUserName: string;
    passwordHash: string;
    phoneNumber: string;
    phoneNumberConfirmed: boolean;
    securityStamp: string;
    twoFactorEnabled: boolean;
    userName: string;
}