"use client"
import { useBrowserStorage, useRefresh } from "@/hooks"
import { useEffect } from "react"
import { useRouter } from "next/navigation"


export const Starter = ({children}: {children: React.ReactNode}) => {
    const { token, userInfo, setUserInfo, deleteUserInfo } = useBrowserStorage()
    const router = useRouter()

    const {
        data: sessionTokenData,
        isSuccess: sessionTokenIsSuccess,
        refetch: refresh,
        isError: sessionTokenIsError,
    } = useRefresh(token || '')

    
    useEffect(() => {
        if(token && !userInfo?.ex) setTimeout(() => refresh(), 0)
        if(userInfo && userInfo.ex < new Date().getTime()) setTimeout(() => refresh(), 0)
    }, [token, userInfo])


    useEffect(() => {
        if(sessionTokenIsSuccess) {
            setUserInfo(sessionTokenData, 600000)
            setTimeout(() => window.location.replace("/"), 0)
        }
        if(sessionTokenIsError) setTimeout(() => router.push('/login'), 0)
    }, [sessionTokenData, sessionTokenIsSuccess, sessionTokenIsError])


    return <>{children}</>
}