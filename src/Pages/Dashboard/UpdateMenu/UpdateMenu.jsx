import { useLoaderData } from "react-router-dom";
import Heading from "../../../Components/Hadding/Heading";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";
const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`

const UpdateMenu = () => {
    const { name, price, category, recipe, _id } = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxios()
    const onSubmit = async (data) => {
        console.log(data);
        const imgFile = { image: data?.image[0] }
        const res = await axiosPublic.post(img_hosting_api, imgFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        })
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                recipe: data.recipe,
                price: parseFloat(data.price),
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount> 0) {
                reset()
                Swal.fire({
                    icon: "success",
                    title: `${data.name} Update to cart`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log(res.data);
    }
    return (
        <div>
            <div>
                <Heading subHeading={'update menu'} heading={'UPDATE ITEM'}></Heading>
            </div>
            <div className="p-20  m-10 bg-[#F3F3F3]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input type="text" defaultValue={name} {...register("name", { required: true })} placeholder="Recipe name" className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={category} {...register("category", { required: true })}
                                className="select select-bordered w-full">
                                <option disabled>Select a category</option>
                                <option value="pizza">Pizza</option>
                                <option value="dessert">Dessert</option>
                                <option value="salad">Salad</option>
                                <option value="soup">Soup</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input defaultValue={price} type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* text aria */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" defaultValue={recipe} {...register("recipe", { required: true })} placeholder="Recipe Details"></textarea>
                        <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs my-4" />
                    </div>
                    <button className="btn bg-[#B58130] text-white btn-lg">
                        Update Item menu
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateMenu;