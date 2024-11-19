export type LoginUserResponseType = {
  id: string;
  email: string;
};

export type AuthUserRequestType = {
  email: string;
  password: string;
};

export type UserType = {
  email: string;
  id: string;
};

export type UserSliceInitialStateType = {
  isLoggedIn: boolean;
  user: Partial<UserType>;
  isAdmin: boolean;
};
