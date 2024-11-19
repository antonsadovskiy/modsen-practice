import { Api } from "@/entities/api";
import {
  AuthRequestType,
  AuthResponseType,
  MeResponseType,
} from "@/entities/api/auth/types";

export class Auth {
  public static async login(data: AuthRequestType) {
    const response = await Api.axios.post<AuthResponseType>("auth/login", data);

    if (response.data.data.accessToken) {
      Api.accessToken = response.data.data.accessToken;
    }

    return response.data;
  }

  public static async me() {
    const response = await Api.axios.get<MeResponseType>("user/me");

    return response.data;
  }

  public static async register(data: AuthRequestType) {
    const response = await Api.axios.post<AuthResponseType>(
      "auth/register",
      data,
    );

    if (response.data.data.accessToken) {
      Api.accessToken = response.data.data.accessToken;
    }

    return response.data;
  }
}
