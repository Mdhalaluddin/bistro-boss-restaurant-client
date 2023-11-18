import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import UseAuth from "./UseAuth";


const useCarts = () => {
    // use quray
    const axiosSecure = useAxios();
    const {user} = UseAuth();
    const {refetch, data: cart = []} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data;
        },
    })
    return [cart, refetch];
};

export default useCarts;