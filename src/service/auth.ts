import { AxiosResponse } from "axios";
import { LoginApi, LoginUserPayload } from "./service-utils/types";
import { defaultErros } from "./service-utils/defaultErros";
import { apiService } from "./config/apiService";

export const LoginService = async (payload: LoginUserPayload) => {
    try {
      const userData: AxiosResponse<LoginApi> = await apiService.post(
        "/auth/login",
        payload
      );
      const { token } = userData.data;
  
      localStorage.setItem("token", token);
      apiService.defaults.headers.Authorization = token;
  
      return { token };
    } catch (error) {
      defaultErros(error);
    }
  };