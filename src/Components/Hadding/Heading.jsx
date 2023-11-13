
const Heading = ({subHeading, heading }) => {
    return (
        <div className='my-10 md:w-2/5 mx-auto text-center'>
            <p className='font-serif text-xl font-bold my-2 text-yellow-600'>--- {subHeading} ---</p>
            <h2 className='text-4xl font-serif border-y-4 py-4'>{heading}</h2>
        </div>
    );
};

export default Heading;