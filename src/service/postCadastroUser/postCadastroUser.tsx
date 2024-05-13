import axios, { AxiosError } from "axios";
import { apiService } from "../config/apiService";

interface ErrorResponse {
  message: string;
}

export const postCadastroUser = async (
  name: string,
  email: string,
  cpf: string,
  password: string,
  street: string,
  neighborhood: string,
  city: string,
  cep: string,
  phone: string
): Promise<{ message: string } | undefined> => {
  try {
    const cpfFormatted = cpf.replace(/\D/g, "");
    const cepFormatted = cep.replace(/\D/g, "");

    // Garantir que o CPF tenha 11 dígitos
    if (cpfFormatted.length !== 11) {
        throw new Error("O CPF deve ter exatamente 11 dígitos.");
      }
  
      // Garantir que o CEP tenha 8 dígitos
      if (cepFormatted.length !== 8) {
        throw new Error("O CEP deve ter exatamente 8 dígitos.");
      }

    const requestData = {
      name,
      email,
      cpf: cpfFormatted,
      password,
      street,
      neighborhood,
      city,
      cep: cepFormatted,
      phone,
    };

    console.log("Request Data:", requestData);

    const result = await apiService.post("/auth/register", requestData);
    return result.data;
  } catch (error) {
    console.error("Erro ao chamar a API", error);
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response && axiosError.response.data) {
        console.error("Resposta do servidor:", axiosError.response.data);
        // Verifica se a resposta do servidor está vazia
        if ("message" in axiosError.response.data) {
          return axiosError.response.data;
        } else {
          return { message: "Algo de errado aconteceu" };
        }
      } else {
        return { message: "Algo de errado aconteceu" };
      }
    } else {
      return { message: "Algo de errado aconteceu" };
    }
  }
};
