
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const handleAddToCart = food => {
        // console.log(food, user.email)
        if (user && user.email) {
            // TODO: send cart item to the database 
            console.log(user.email, food)
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
            }

            axios.post('http://localhost:5000/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to the card`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please Login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login"
            }).then((result) => {
                if (result.isConfirmed) {
                    //Send the user to the login page 
                    navigate('/login', { state: { from: location } })
                }
            });
        }
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