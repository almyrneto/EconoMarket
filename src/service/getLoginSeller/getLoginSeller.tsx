import { apiService } from "../config/apiService"

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    name?: string;
}

export interface SellerDetails {
    name: string;
    email: string;
    street: string;
    neighborhood: string;
    city: string;
    phone: string;
    password: string;
    cep: string;
    image: string;
    role: string;
}


export const loginSeller = async (credentials: LoginCredentials): Promise<LoginResponse> => {

    try {
        const response = await apiService.post("/auth", credentials);
        console.log("Response from loginSeller:", response.data);
        return {
            token: response.data.token,
            name: response.data.name
        }
    } catch (error) {
        throw new Error("Erro ao fazer o login")
    }
}


export const getSellerDetails = async (token: string): Promise<SellerDetails> => {
    try {
        const response = await apiService.get("/sellers/info/me", {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;

    } catch (error) {
        throw new Error("Erro ao obter os detalhes do vendedor")
    }
}
