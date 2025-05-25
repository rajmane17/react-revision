import { useState } from "react";

export function useCounter() {
    const [count, setCount] = useState(0);

    function incremenet(){
        setCount(prev => prev + 1);
    }

    function decrement(){
        setCount(prev => prev - 1);
    }

    return {count, incremenet, decrement};
}