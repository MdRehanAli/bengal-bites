import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

import menuImage from '../../../assets/menu/menuBg7.png'
import dessertImage from '../../../assets/menu/menuBg6.png'
import pizzaImage from '../../../assets/menu/menuBg8.png'
import soupImage from '../../../assets/menu/menuBg5.png'
import saladImage from '../../../assets/menu/menuBg4.png'

import useMenu from "../../../Layout/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {

    const [menu] = useMenu()

    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bengal Bites | Menu</title>
            </Helmet>

            <Cover
                img={menuImage}
                title="Our Menu"
            ></Cover>

            <SectionTitle
                subHeading="Don't miss"
                heading="Todays Offer"
            ></SectionTitle>

            <MenuCategory items={offered} ></MenuCategory>
            <MenuCategory items={desserts} title={"dessert"} img={dessertImage}></MenuCategory>
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImage}></MenuCategory>
            <MenuCategory items={salad} title={"salad"} img={saladImage}></MenuCategory>
            <MenuCategory items={soup} title={"soup"} img={soupImage}></MenuCategory>

        </div>
    );
};

export default Menu;