import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import featuredImage from '../../../../src/assets/home/features.png'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pb-10 pt-4 my-20">
            <SectionTitle
                subHeading={"check it out"}
                heading={"Featured Items"}
            ></SectionTitle>
            <div className="flex justify-center items-center px-36 py-8">
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className="md:ml-10 ">
                    <p className="">Aug 20, 2025</p>
                    <p>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A nam corrupti praesentium nisi. Minus recusandae similique ducimus quaerat reiciendis accusamus ipsam at nihil. Eius fugit cum ex, delectus totam necessitatibus amet alias ratione ab quis consectetur accusamus repellat ea voluptates corporis, minima ullam at recusandae ipsam eos voluptatibus. Necessitatibus, nostrum.</p>
                    <button className="btn btn-outline btn-info border-0 border-b-4">Order Now</button>
                </div>

            </div>
        </div>
    );
};

export default Featured;
