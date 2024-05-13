import { apiService } from "../config/apiService";


export interface LoginCredentials {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    name?: string;
}

export interface BuyerDetails {
    name: string;
    email: string;
    phone: string;
    street: string;
    neighborhood: string;
    city: string;
    password: string;
    cep: string;
    image: string;
    role: string;
    cpf: string;
}

export const loginBuyer = async (credentials: LoginCredentials): Promise<LoginResponse> => {

    try {
        const response = await apiService.post("/auth", credentials)
        console.log("Response from loginBuyer:", response.data);
        return {
            token: response.data.token,
            name: response.data.name,
        }
    } catch (error) {
        throw new Error("Erro ao fazer o login")
    }
}

export const getBuyerDetails = async (token: string): Promise<BuyerDetails> => {
    try {
        const response = await apiService.get("/users/info/me", {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        throw new Error("Erro ao buscar os dados do comprador")
    }
}