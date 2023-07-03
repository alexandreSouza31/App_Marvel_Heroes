import { useState, useEffect } from "react";
import { Dialog } from "./Styled-components/layoutStyles/MessageStyles";

function Message({ msg }) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!msg) {
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)
        
        return () => clearTimeout(timer)
        
    }, [msg])//useEffect vai estar ligado a mensagem
    
    return (
        <>
            {visible && (
            <Dialog>
                {msg}
            </Dialog>                
            )}
        </>
    )
}

export default Message