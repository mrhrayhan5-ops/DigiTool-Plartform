import BannerImage from '../assets/banner.png'

const Banner = () => {
    return (
        <div className="flex justify-around  items-center mt-10">
            {/* banner left */}
            <div className="">


                <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 text-sm font-medium px-5 py-2 rounded-full"><img src="src/assets/dot.svg" /> New: AI-Powered Tools Available</div>


                <h1 className='text-5xl font-bold my-5'>Supercharge Your <br /> Digital Workflow</h1>
                <p className='text-gray-500 mb-3'>Access premium AI tools, design assets, templates, and productivity
                    <br /> software—all in one place. Start creating faster today.
                    <br /> Explore Products
                </p>
                <div className='gap-5 flex'>
                    <button className='btn BTN'>Explore Products</button>
                    <button className='btn btn-outline border-purple-500 rounded-full text-purple-600'><img src="/src/assets/Vector.svg" alt="" /> Watch Demo</button>
                </div>
            </div>
            {/* banner right */}
            <div>
                <img src={BannerImage} />
            </div>
        </div>
    );
};

export default Banner;