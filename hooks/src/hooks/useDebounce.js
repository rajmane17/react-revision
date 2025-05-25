import { useEffect, useState } from "react";

export function useDebounce(inputVal, delay) {
    const [debouncedVal, setDebouncedVal] = useState(inputVal);

    useEffect(() => {
        //sbse pehle time return nhi hoga
        //then from 2nd time, pehle return run hoga then upar vala
        const timer = setTimeout(() => {
            setDebouncedVal(inputVal);
        }, delay)

        return () => {
            clearTimeout(timer)
        }
    }, [inputVal, delay])

    return debouncedVal;
}