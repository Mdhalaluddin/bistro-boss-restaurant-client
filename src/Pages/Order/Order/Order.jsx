import Cover from "../../Home/Sheared/Cover/Cover";
import orderImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import CartTab from "../CartTab/CartTab";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = ['dessert', 'salad', 'soup', 'pizza', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category) 
    const [indexMenu, setIndexMenu] = useState(initialIndex);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div>
            <Cover img={orderImg} title={'OUR SHOP'}></Cover>
            <div className="mt-10 text-center bg-slate-100 p-2">
                <Tabs defaultIndex={indexMenu} onSelect={(index) => setIndexMenu(index)}>
                    <TabList>
                        <Tab>Dessert</Tab>
                        <Tab>Salad</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel >
                        <CartTab items={dessert}></CartTab>
                    </TabPanel>
                    <TabPanel>
                        <CartTab items={salad}></CartTab>
                    </TabPanel>
                    <TabPanel>
                    <CartTab items={soup}></CartTab>
                    </TabPanel>
                    <TabPanel>
                    <CartTab items={pizza}></CartTab>
                    </TabPanel>
                    <TabPanel>
                    <CartTab items={drinks}></CartTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;