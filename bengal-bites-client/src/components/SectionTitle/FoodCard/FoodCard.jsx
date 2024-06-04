import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item
    const user = useContext(AuthContext)

    const handleAddToCart = food => {
        console.log(food);
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Food Image" /></figure>
            <p className="bg-black text-white absolute right-0 mr-4 mt-4 p-2">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="text-2xl">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                    onClick={() => handleAddToCart(item)}
                    className="btn btn-outline bg-slate-900 border-orange-400 border-0 border-b-4">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;