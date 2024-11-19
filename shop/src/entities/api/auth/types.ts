export type AuthRequestType = {
  login: string;
  password: string;
};

export type AuthResponseType = {
  data: {
    accessToken: string;
  };
  message: string;
};

export type MeResponseType = {
  data: {
    login: string;
  };
  meta: string;
};
