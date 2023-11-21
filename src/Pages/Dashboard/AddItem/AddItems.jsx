import { useForm } from "react-hook-form";
import Heading from "../../../Components/Hadding/Heading";

const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <Heading heading={"ADD AN ITEM"} subHeading={"What's new"}></Heading>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <input {...register("firstName")} /> */}
                    <select {...register("category")}
                    className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Select a category</option>
                        <option value="pizza">Pizza</option>
                        <option value="dessert">Dessert</option>
                        <option value="salad">Salad</option>
                        <option value="soup">Soup</option>
                        <option value="drinks">Drinks</option>
                    </select>
                    <input className="ml-4" type="submit" />

                </form>
            </div>
        </div>
    );
};

export default AddItems;