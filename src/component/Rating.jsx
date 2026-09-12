

const Rating = () => {
    return (
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-15 p-15 text-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center ">
                <div className="space-y-2 md:border-r border-white/20 md:pr-8">
                    <h1 className="text-4xl lg:text-5xl font-bold">50K+</h1>
                    <p className="text-purple-200 text-sm md:text-base font-medium">Active Users</p>
                </div>
                <div className="space-y-2 md:border-r border-white/20 md:px-8">
                    <h1 className="text-4xl lg:text-5xl font-bold">200+</h1>
                    <p className="text-purple-200 text-sm md:text-base font-medium">Premium Tools</p>
                </div>
                <div className="space-y-2 md:pl-8">
                    <h1 className="text-4xl lg:text-5xl font-bold">4.9</h1>
                    <p className="text-purple-200 text-sm md:text-base font-medium">Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Rating;