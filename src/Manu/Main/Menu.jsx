import { Helmet } from 'react-helmet-async';
import Cover from '../../Pages/Home/Sheared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import useMenu from '../../hooks/useMenu';
import Heading from '../../Components/Hadding/Heading';
import MainCategory from './MainCategory/MainCategory';

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert') 
    const salad = menu.filter(item => item.category === 'salad') 
    const soup = menu.filter(item => item.category === 'soup') 
    const pizza = menu.filter(item => item.category === 'pizza') 
    const offered = menu.filter(item => item.category === 'offered') 

    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS | MENU</title>
            </Helmet>
            <Cover img={menuImg} title={'OUR MENU'} ></Cover>
            {/* offered section */}
            <Heading subHeading={"Don't Miss" } heading={"TOday's Offer"}></Heading>
            <MainCategory items={offered}></MainCategory>
            {/* dessert */}
            <Cover img={dessertImg} title={'DESSERTS'} ></Cover>
            <MainCategory items={dessert}></MainCategory>
            {/* PIZZA */}
            <Cover img={pizzaImg} title={'PIZZA'} ></Cover>
            <MainCategory items={pizza}></MainCategory>

        </div>
    );
};

export default Menu;