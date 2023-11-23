import { FaEdit } from "react-icons/fa";
import Heading from "../../../Components/Hadding/Heading";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";


const ManegeItem = () => {
    const [menu, , refetch] = useMenu()
    const axiosSecure = useAxios();
    const handleEditItem = () => {
    }
    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }
    return (
        <div>
            <div className="bg-[#F6F6F6] w-full py-5">
                <Heading subHeading='Hurry Up!' heading='MANAGE ALL ITEMS'></Heading>
            </div>
            <div className="my-10">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054]">
                            <tr className="text-xl font-medium">
                                <th></th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM Name</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) =>
                                    <tr key={item._id}>
                                        <td>
                                            {index + 1}
                                        </td>
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
                                            {item.name}
                                        </td>
                                        <td>{item.price}</td>
                                        <td>
                                            <Link to={`/dashboard/updateMenu/${item._id}`}>
                                                <button onClick={() => { handleEditItem(item) }} className="btn bg-[#D1A054]"><FaEdit className="text-xl text-white"></FaEdit>
                                                </button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button onClick={() => { handleDeleteItem(item) }} className="btn bg-[#B91C1C]"><MdDelete className="text-2xl text-white"></MdDelete></button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>



                    </table>
                </div>

            </div>
        </div>
    );
};

export default ManegeItem;