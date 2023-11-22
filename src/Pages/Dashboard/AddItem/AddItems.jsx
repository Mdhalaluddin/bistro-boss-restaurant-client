import { useForm } from "react-hook-form";
import Heading from "../../../Components/Hadding/Heading";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
const img_hosting_api = `https://api.imgbb.com/1/upload?key${img_hosting_key}`

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic()
    const onSubmit = async (data) => {
        console.log(data);
        const imgFile = { image: data?.image[0] }
        const res = await axiosPublic.post(img_hosting_api, imgFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        })
        console.log(res.data);
    }
    return (
        <div>
            <Heading heading={"ADD AN ITEM"} subHeading={"What's new"}></Heading>
            <div className="p-20  m-10 bg-[#F3F3F3]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Recipe name" className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue='default' {...register("category", { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value='default'>Select a category</option>
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
                            <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* text aria */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" {...register("recipe", { required: true })} placeholder="Recipe Details"></textarea>
                        <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs my-4" />
                    </div>
                    <button className="btn bg-[#B58130] text-white btn-lg">
                        Add Item <FaUtensils className="ml-4"></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;