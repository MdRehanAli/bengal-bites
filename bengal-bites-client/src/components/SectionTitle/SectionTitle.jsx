

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center my-8">
            <p className="text-yellow-600 ">---{subHeading}---</p>
            <h1 className=" text-3xl uppercase border-y-4 p-8 inline-block mt-4">{heading}</h1>
        </div>
    );
};

export default SectionTitle;