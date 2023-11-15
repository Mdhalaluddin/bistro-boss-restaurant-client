import Cover from "../../Home/Sheared/Cover/Cover";
import orderImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import MenuCard from "../../Home/Sheared/MenuCard/MenuCard";

const Order = () => {
    const [indexMenu, setIndexMenu] = useState(0);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert') 
    const salad = menu.filter(item => item.category === 'salad') 
    const soup = menu.filter(item => item.category === 'soup') 
    const pizza = menu.filter(item => item.category === 'pizza') 
    const offered = menu.filter(item => item.category === 'offered')
    
    return (
        <div>
            <Cover img={orderImg} title={'OUR SHOP'}></Cover>
            <div className="my-10 text-center">
            <Tabs defaultIndex={indexMenu} onSelect={(index) => setIndexMenu(index)}>
                <TabList>
                    <Tab>Dessert</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid md:grid-cols-3 gap-8">
                        {
                            salad.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default Order;