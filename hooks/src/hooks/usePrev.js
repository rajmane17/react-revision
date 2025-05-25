import { useEffect, useRef } from "react";

//Gives us the previous value of a state variable (It's not correct, it gives us something else that we will understand later)
//for now just keep in mind it gives us the previous value
export function usePrev(value) {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [value])

    return ref.current;
}

//It return's first, effect gets loaded
//Ref let's you store a value in a variable and when this value is changed, the component doesn't re-render