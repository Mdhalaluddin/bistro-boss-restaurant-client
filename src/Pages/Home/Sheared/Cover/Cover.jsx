import { Parallax} from 'react-parallax';


const Cover = ({img, title}) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div className="hero min-h-screen bg-fixed">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className=" bg-[#15151599] w-[920px] h-[300px] text-center py-20">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5">Would you like to try a dish?</p>
                </div>
            </div>
        </div>
    </Parallax>

        
    );
};

export default Cover;