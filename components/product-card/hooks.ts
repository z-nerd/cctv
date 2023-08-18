import { useProductImageById } from "@/hooks"
import { useState } from "react"

interface useProductCardHookProps {
    imageId: string
}

export const useProductCardHook = ({ imageId }: useProductCardHookProps) => {
    const [lessOrMore, setLessOrMore ] = useState(false)
    const handleLessOrMoreToggle = () => setLessOrMore(state => !state)
    const productImageReq = useProductImageById(imageId)


    return { lessOrMore, handleLessOrMoreToggle, productImageReq }
} 