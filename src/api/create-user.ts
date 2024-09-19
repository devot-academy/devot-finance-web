// importar ferramenta comunicação

type ICreateUSer  = {
    email: string;
    name: string;
    password: string;
}
export function createUser(data: ICreateUSer) {
    // axios.POST('/user', data)
}