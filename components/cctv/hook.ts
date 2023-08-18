"use client"
import React from 'react'


const useMousePosition = (_x: number, _y: number) => {
    const [
        mousePosition,
        setMousePosition
    ] = React.useState({ x: _x, y: _y })
    React.useEffect(() => {
        const updateMousePosition = (ev: { clientX: any; clientY: any }) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY })
        }
        window.addEventListener('mousemove', updateMousePosition)
        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
        }
    }, [])
    return mousePosition
}


export default useMousePosition