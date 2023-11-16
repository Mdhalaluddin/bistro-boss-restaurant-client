import { useEffect, useState } from "react";

const useMenu = () => {
    const [manus, setManus] = useState([]);
    const [loader, setLoader] = useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res=> res.json())
        .then(data => {
            setManus(data)
            setLoader(false)
        })
    },[])
    return [manus, loader]
};

export default useMenu;