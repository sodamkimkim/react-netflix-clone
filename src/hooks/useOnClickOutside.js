import React, {useEffect} from 'react'

export default function useOnClickOutside(ref, handler) {
    useEffect(() => {
        const callback = (event) => {
            console.log('ref', ref);
            console.log('event.target', event.target);
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            } // modal 유지
            else{
                console.log("????????? -> modal 꺼질 때 호출 됨");
            }
            handler(event); // modal close
        };
        document.addEventListener("mousedown", callback);
        document.addEventListener("touchstart", callback);

        return() => {
            console.log("event-listener removed -> modal 꺼질 때 호출되네");
            document.removeEventListener("mousedown", callback);
            document.removeEventListener("touchstart", callback);
        }
    }, [ref, handler]);
}
