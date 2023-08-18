export interface ILoginBody {
    username: string
    password: string
}


export interface ILoginResult {
    userId: string
    username: string
    token: string
}


export interface IRefreshResult {
    id: string
    fullname: string
    birthday: string
    username: string
    email: string
    role: string
    token: string
}


export interface IRegisterBody {
    fullname: string
    birthday: string
    email: string
    username: string
    password: string
}


export interface IRegisterResult {
    message: string
    userId: string
    username: string
    role: string
}