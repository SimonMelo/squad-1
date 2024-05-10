import axios from 'axios'

const uriEndpoint = "https://squad-1-api.onrender.com"

export const registerPost = (newData) => {
    const postData = {
        name: newData?.name,
        cpfCnpj: newData?.cpfCnpj,
        email: newData?.email,
        confirmEmail: newData?.confirmEmail,
        password: newData?.password,
        confirmPassword: newData?.confirmPassword
    }
    return axios.post(`${uriEndpoint}/signup`, postData)
}

export const newPasswordPost = (newData) => {
    const postData = {
        email: newData?.email,
        password: newData?.password,
        newPassword: newData?.newPassword
    }
    return axios.post(`${uriEndpoint}/reset-password`, postData)
}

export const loginPost = (newData) => {
    const postData = {
        cpfCnpj: newData?.cpfCnpj,
        password: newData?.password,
    }
    return axios.post(`${uriEndpoint}/login`, postData)
}

//Funcao para representar a rota de mudar a senha
export const updatePassword = (newData) => {
    return {data:`Senha atualizada para ${newData?.password}`};
}