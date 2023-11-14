import { useEffect, useState } from "react";

const useMenu = () => {
    const [manus, setManus] = useState([]);
    const [loader, setLoader] = useState(true);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=> res.json())
        .then(data => {
            setManus(data)
            setLoader(false)
        })
    },[])
    return [manus, loader]
};

export default useMenu;