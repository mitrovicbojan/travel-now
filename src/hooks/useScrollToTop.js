import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({top: 0, left: 0});
        }, 0)
        
    }, [pathname]);
    return null;
}

export default useScrollToTop
