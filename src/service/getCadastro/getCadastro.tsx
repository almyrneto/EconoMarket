import { apiService } from "../config/apiService"

export const getCadastro = async (
    name: string,
    email: string,
    street: string,
    neighborhood: string,
    city: string,
    cep: string,
    phone: string,
    password: string,
    // image: string,
    // confirmPassword: string,
): Promise<{ message: string } | undefined> => {
    try {
        const result = await apiService.post("/sellers", {
            name,
            email,
            street,
            neighborhood,
            city,
            cep,
            phone,
            password,
            // image,
            // confirmPassword,
        });
        if (result.status === 200) {
            return;
        }
    } catch (error) {
        console.error('Erro ao chamar a API', error);
        return { message: 'algo de errado aconteceu' };
    }
};
