

const MenuCard = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="card w-96 bg-base-100 p-4 my-6 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-black text-white absolute right-0 px-2 py-1 mr-6 mt-4">$ {price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions my-2 justify-center">
                    <button className="btn btn-outline border-b-4 border-0  text-xl btn-warning uppercase">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;