import React, { useEffect } from 'react'
import { MessageElement } from './styles.js'

function Message({ setIsEnterPress, message }) {
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsEnterPress(false)
        }, 3000)

        return () => clearTimeout(timeout)
    }, [])

    return <MessageElement>
        <span>{message}</span>
    </MessageElement>
}

export default Message