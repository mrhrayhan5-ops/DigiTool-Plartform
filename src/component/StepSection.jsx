import userImg from '../assets/user.png'
import packageImg from '../assets/package.png'
import rocketImg from '../assets/rocket.png'

const StepSection = () => {
    return (
        <div className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold">Get Started in 3 Steps</h2>
                    <p className="mt-3 text-gray-600 text-sm sm:text-base">Start using premium digital tools in minutes, not hours.</p>
                </div>
                {/* Card Container */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Step 1 */}
                    <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center">
                        <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                            01
                        </div>
                        <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-6">
                            {/* User Icon img */}
                            <img src={userImg} alt="user" className="w-8 h-8 object-contain"/>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Create Account</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Sign up for free in seconds. No credit card required to get started.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center">
                        <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                            02
                        </div>
                        <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-6">
                            {/* Package Icon  */}
                          <img src={packageImg} alt="package" className="w-8 h-8 object-contain"/>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Products</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Browse our catalog and select the tools that fit your needs.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center">
                        <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                            03
                        </div>
                        <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-6">
                            {/* Rocket Icon  */}
                            <img src={rocketImg} alt="rocket" className="w-8 h-8 object-contain" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Start Creating</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Download and start using your premium tools immediately.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepSection;