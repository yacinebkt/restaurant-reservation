export interface UserState {
  uid: string;
  emailVerified: boolean;
  email: string;
  phoneNumber: string;
  fullname: string;
  token: string;
  refreshToken: string;
  rememberMe: boolean;
}

export type UserPermissionType = {
  id: string;
  name: string;
  groupName: string | null;
  description: string | null;
};




