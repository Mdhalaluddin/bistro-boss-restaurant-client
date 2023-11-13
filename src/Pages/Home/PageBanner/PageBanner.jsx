

const PageBanner = () => {
    return (
        <div className="hero min-h-[400px] my-20" style={{ backgroundImage: 'url(https://i.ibb.co/rGRJMGS/chef-service.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="md:w-4/5 bg-white text-black p-16">
                    <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default PageBanner;