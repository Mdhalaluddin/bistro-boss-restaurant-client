import Swal from "sweetalert2";
import UseAuth from "../../../../hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../../../hooks/useAxios";
import useCarts from "../../../../hooks/useCarts";


const MenuCard = ({ item }) => {
    const { name, recipe, image, price, _id } = item;
    const { user } = UseAuth();
    console.log(user);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxios();
    const [, refetch] =useCarts()


    const hanldeAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                price,
                image,
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        icon: "success",
                        title: `${name} card added`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                    //   refetch cart to update
                    refetch();
                }
            })
            
        }
        else {
            Swal.fire({
                title: "You are a not Logged In",
                text: "Please Login add to cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Logged!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state:{from: location}})
                }
            });
        }
    }

    return (
        <div className="card w-96 bg-base-100 p-4 my-6 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-black text-white absolute right-0 px-2 py-1 mr-6 mt-4">$ {price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div onClick={hanldeAddToCart}
                    className="card-actions my-2 justify-center">
                    <button className="btn btn-outline border-b-4 border-0  text-xl btn-warning uppercase">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;