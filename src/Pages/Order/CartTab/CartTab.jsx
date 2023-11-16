import MenuCard from "../../Home/Sheared/MenuCard/MenuCard";


const CartTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-8  mx-auto max-w-[92%]">
            {
                items.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
            }
        </div>
    );
};

export default CartTab;