import { IRefreshResult } from "@/types/api/auth.type"
import { SetStateAction } from "react"
import { useLocalStorage, useSessionStorage } from "react-use"


export const useBrowserStorage = () => {
    const [token, setToken] = useLocalStorage<string | undefined>('token')
    const [userInfo, setUserInfoLS, deleteUserInfo] = useLocalStorage<IRefreshResult & { ex: number } | undefined>('userInfo')

    const setUserInfo = (value: SetStateAction<IRefreshResult>, ex: number) => {
        setUserInfoLS({
            ...value,
            ex: new Date().getTime() + ex
        } as any)
    }


    return { token, setToken, userInfo, setUserInfo, deleteUserInfo }
} 