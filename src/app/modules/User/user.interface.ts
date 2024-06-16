export type TUser = {
    name: string;
    email: string;
    password: string;
    role?: 'seller';
    isVerified?: boolean;
    isDeleted?: boolean;
};
