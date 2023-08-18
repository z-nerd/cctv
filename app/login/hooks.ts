import { useBrowserStorage, useLogin, useRefresh } from "@/hooks"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"


export const usePageHooks = () => {
    const { setToken } = useBrowserStorage()
    const router = useRouter()


    const [formParams, setFormParams] = useState({
        username: '',
        password: '',
        remember: false,
    })

    const { 
        data: loginData, 
        error: loginError, 
        isFetching: loginIsFetching,
        isLoading: loginIsLoading,
        isSuccess: loginIsSuccess,
        refetch: login,
    } = useLogin(formParams)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)

        setFormParams({
            username: String(data.get('username')) || '',
            password: String(data.get('password')) || '',
            remember: data.get('remember') ? true : false
        })

        setTimeout(() => login(), 0)
    }

    useEffect(() => {
        if(loginIsSuccess) {
            setToken(loginData.token)
            setTimeout(() => window.location.replace("/"), 0)
        }
    }, [loginIsSuccess, loginData])


    return {
        handleSubmit,
        loginData,
        loginError,
        loginIsFetching,
        loginIsLoading,
    }
}