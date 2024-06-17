export type TUser = {
    name: string;
    email: string;
    password: string;
    role?: 'manager';
    isVerified?: boolean;
    isDeleted?: boolean;
};
