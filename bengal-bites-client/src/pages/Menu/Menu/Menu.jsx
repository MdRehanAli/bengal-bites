import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

import menuImage from '../../../assets/menu/menuBg7.png'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bengal Bites | Menu</title>
            </Helmet>
            <Cover
            img={menuImage}
            title="Our Menu"
            ></Cover>
        </div>
    );
};

export default Menu;