

const ManuItem = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="flex space-x-2">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h2 className="2xl">{name}-------</h2>
                <p>{recipe}</p>
            </div>
            <div>
                <p>${price}</p>
            </div>
        </div>
    );
};

export default ManuItem;