import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic"

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic()
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imagbb and then get and url 
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(res.data)
    }
    return (
        <div>
            <SectionTitle heading="add an item" subHeading="What's new?">

            </SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Recipe Name:"
                            {...register('name', { required: true })}
                            className="input input-bordered w-full" />
                    </label>

                    <div className="flex gap-6">
                        {/* category  */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">category*</span>
                            </div>
                            <select defaultValue="default" {...register("category", { required: true })} className="select select-bordered w-full">
                                <option disabled value="default">Select a Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </label>

                        {/* price  */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input
                                type="number"
                                placeholder="Price:"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* recipe details  */}
                    <label className="form-control mt-6">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </label>

                    <div className="form-control w-full my-6">
                        <input {...register('image')} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn ">Add Item <FaUtensils className="ml-2"></FaUtensils> </button>
                </form>
            </div>
        </div >
    );
};

export default AddItems;