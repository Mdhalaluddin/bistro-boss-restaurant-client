import Swal from "sweetalert2";
import useCarts from "../../../hooks/useCarts";
import useAxios from "../../../hooks/useAxios";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";


const Cart = () => {
    const [cart, refetch] = useCarts();
    const axiosSecure = useAxios()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }
    return (
        <div className="bg-white p-8">
            <div className="flex justify-evenly mb-10">
                <h2 className="text-4xl">Total orders: {cart.length}</h2>
                <h2 className="text-4xl">Total price: {totalPrice}</h2>
                {cart.length ? <Link to='/dashboard/payment'>
                    <h2 className="btn btn-primary">pay</h2>
                </Link> :
                    <h2 className="btn btn-primary btn-disabled">pay</h2>
                }
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-sm bg-[#D1A054] rounded-t-xl  rounded-[15px, 15px, 0, 0] font-semibold">
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>ITEM NAME</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            cart.map((item, index) => <tbody key={item._id}>
                                {/* row 1 */}
                                <tr>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h2>{item.name}</h2>
                                    </td>
                                    <td>{item.price}</td>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn  text-red-500"><MdDelete className="text-2xl" />
                                        </button>
                                    </th>
                                </tr>
                            </tbody>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;