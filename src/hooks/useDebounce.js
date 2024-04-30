import React, {useEffect, useState} from 'react'

export default function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(()=>{
        // Update debounced value after delay
        const handler= setTimeout(()=>{
            setDebouncedValue(value);
        }, delay);  

        // Cancle the timeout if value changes
        return ()=>{
            clearTimeout(handler);
        }
    }, [value, delay]);
  return debouncedValue;
}
 