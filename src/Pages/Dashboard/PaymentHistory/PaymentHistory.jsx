import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../hooks/UseAuth";
import useAxios from "../../../hooks/useAxios";
import Heading from "../../../Components/Hadding/Heading";


const PaymentHistory = () => {
    const { user } = UseAuth();
    const axiosSecure = useAxios();

    const { data : payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data
        }
    })
    return (
        <div>
            <Heading subHeading={'total payment'} heading={'payment history'}></Heading>

            <div>
                <h2 className="text-3xl font-mono">Payment: <span className="text-red-400">{payments.length}</span></h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-2xl">
                                <th> </th>
                                <th>Price</th>
                                <th>Transaction id</th>
                                <th>status</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl">
                            {payments?.map((payment, index) =><tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>$ {payment.price}</td>
                                <td>{payment.transactionId}</td>
                                <td>{payment.status}</td>
                            </tr> )}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;