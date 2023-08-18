import { useBrowserStorage, useLogin, useRefresh, useRegister } from "@/hooks"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"


export const usePageHooks = () => {
    const router = useRouter()

    const [formParams, setFormParams] = useState({
        fullname: '',
        birthday: '',
        email: '',
        username: '',
        password: '',
    })

    const { 
        data: registerData, 
        error: registerError, 
        isFetching: registerIsFetching,
        isLoading: registerIsLoading,
        isSuccess: registerIsSuccess,
        refetch: register,
    } = useRegister(formParams)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)

        setFormParams({
            fullname: String(data.get('fullname')) || '',
            birthday: String(data.get('birthday')) || '',
            email: String(data.get('email')) || '',
            username: String(data.get('username')) || '',
            password: String(data.get('password')) || '',
        })

        setTimeout(() => register(), 0)
    }

    
    useEffect(() => {
        if(registerIsSuccess) setTimeout(() => router.push('/login'), 0)
    }, [registerIsSuccess, registerData])


    return {
        handleSubmit,
        registerData,
        registerError,
        registerIsFetching,
        registerIsLoading,
    }
}