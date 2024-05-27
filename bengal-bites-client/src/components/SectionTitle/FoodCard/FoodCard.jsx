

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Food Image" /></figure>
            <p className="bg-black text-white absolute right-0 mr-4 mt-4 p-2">${price}</p>
            <div className="card-body text-center">
                <h2 className="text-2xl">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;