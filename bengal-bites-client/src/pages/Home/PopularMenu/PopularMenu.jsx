
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {

    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === "popular")

    // const [menu, setMenu] = useState([])

    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems)
    //     })
    // } ,[])

    return (
        <section>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"From Our Menu"}
            >
            </SectionTitle>

            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='flex items-center justify-center mt-8 '>

                <button className="btn btn-outline btn-info border-0 border-b-4">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;