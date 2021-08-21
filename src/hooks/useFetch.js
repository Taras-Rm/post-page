import React, {useState} from "react";

const useFetch = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState('');

    const fetching = async (...arg) => {
        try {
            setIsLoading(true);
            await callback(...arg);
        } catch (e) {
            setErrors(e.message);
        } finally {
            setIsLoading(false);
        }
    }
    return [fetching, isLoading, errors]
}

export default useFetch;