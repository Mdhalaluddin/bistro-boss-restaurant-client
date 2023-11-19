import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import { MdDelete } from "react-icons/md";
import { FaUser, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUser = () => {
    const axiosSecure = useAxios();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`

                }
            })
            return res.data;
        }
    })
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCounted > 0) {
                    refetch()
                    Swal.fire({
                        position: "",
                        icon: "success",
                        title: `${user.name} admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }

    const handleDelete = user => {
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
                axiosSecure.delete(`/users/${user._id}`)
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
        <div>
            <div className="w-1/2 mb-6 bg-[#F6F6F6]  mx-auto">
                <h3 className="text-xl mb-4 text-center text-[#D99904]">---How many??---</h3>
                <hr />
                <h2 className="text-3xl text-center font-semibold my-2">MANAGE ALL USERS</h2>
                <hr />
            </div>
            <div className=" bg-[#FFF] p-5">
                <h2 className="text-2xl font-bold rounded-xl my-4">Total User: {users.length}</h2>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D1A054] my-4 text-lg font-semibold">
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>ROLE</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr className="p-4" key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user?.role === 'admin' ? <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="btn bg-[#D1A054]  text-white"><FaUser className="text-2xl" />
                                        </button>
                                            : <button
                                                onClick={() => handleMakeAdmin(user)}
                                                className="btn bg-[#D1A054]  text-white"><FaUsers className="text-2xl" />
                                            </button>}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(user)}
                                            className="btn  text-red-500"><MdDelete className="text-2xl" />
                                        </button>

                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUser;