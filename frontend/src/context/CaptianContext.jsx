import { createContext, useContext, useState } from "react"

export const captianDataContext = createContext();

const CaptianContext = ({ children }) => {
    const [captian, setCaptian] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateCaptian = (captianData) => {
        setCaptian(captianData);
    }

    const value = {
        captian,
        setCaptian,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptian
    }

    return (
        <captianDataContext.Provider value={value}>
            {children}
        </captianDataContext.Provider>
    )
}

export default CaptianContext
