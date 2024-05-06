import { apiService } from "../config/apiService"



export const loginSeller = async (credentials: {
    email: string,
    password: string
}): Promise<{ token: string } | undefined> => {

    try {
        const result = await apiService.post("/auth", credentials);
        if (result.status === 200) {
            return result.data;
        }
    } catch (error) {
        console.error('Erro ao chamar a API', error);
        return undefined;
    }
}