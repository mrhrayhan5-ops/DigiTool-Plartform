import tickMarck from '../assets/tickMarck.svg'
import whiteCheck from '../assets/whiteCheck.png'

const PricingCard = () => {
    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold">Simple, Transparent Pricing</h2>
                    <p className="mt-3 text-gray-600 text-sm sm:text-base">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                {/* card container */}

                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {/* stater plan card*/}
                    <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 flex flex-col justify-between shadow-sm border border-slate-200/60">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-1">Stater</h2>
                            <p className="text-gray-500 text-sm ">Perfect for getting started</p>
                        </div>
                        <div className="flex items-baseline mb-8">
                            <span className="text-4xl font-extrabold text-slate-900 tracking-tight">$0</span>
                            <span className="text-sm font-medium text-slate-400 ml-1">/Month</span>
                        </div>
                        <ul className="text-gray-500 space-y-3.5 mb-8 text-sm">
                            <li className='flex items-center gap-2.5'><img src={tickMarck} alt="" />Access to 10 free tools</li>
                            <li className='flex items-center gap-2.5'><img src={tickMarck} alt="" />Basic templates</li>
                            <li className='flex items-center gap-2.5'><img src={tickMarck} alt="" />Community support</li>
                            <li className='flex items-center gap-2.5'><img src={tickMarck} alt="" />1 project per month</li>
                        </ul>
                        {/* btn */}

                        <button className="w-full py-3 px-6 rounded-full font-medium text-sm bg text-white btn">Get Started Free</button>

                    </div>
                    {/* pro plan card */}
                    <div className="bg rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col space-y-6 relative">
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-100 text-amber-800 text-xs font-semibold px-4 py-1 rounded-full shadow-sm">
                            Most Popular
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white mb-1">Pro</h2>
                            <p className="text-white text-sm">Best for professionals</p>
                        </div>
                        <div className="flex items-baseline mb-8">
                            <span className="text-4xl font-extrabold tracking-tight text-white">$29</span>
                            <span className="text-sm font-medium text-indigo-100 ml-1">/Month</span>
                        </div>
                        <ul className="space-y-3.5 mb-8 text-sm">
                            <li className='flex items-center gap-2.5 text-white'><img src={whiteCheck} alt="" />Access to all premium tools</li>
                            <li className='flex items-center gap-2.5 text-white'><img src={whiteCheck} alt="" />Unlimited templates</li>
                            <li className='flex items-center gap-2.5 text-white'><img src={whiteCheck} alt="" />Priority support</li>
                            <li className='flex items-center gap-2.5 text-white'><img src={whiteCheck} alt="" />Unlimited projects</li>
                            <li className='flex items-center gap-2.5 text-white'><img src={whiteCheck} alt="" />Cloud sync</li>
                            <li className='flex items-center gap-2.5 text-white'><img src={whiteCheck} alt="" />Advanced analytics</li>
                        </ul>
                        {/* btn */}

                        <button className='btn w-full py-3 px-6 rounded-full font-medium text-sm bg-white text-purple-700 hover:bg-slate-50 transition-colors"'>Start Pro Trial</button>

                    </div>
                    {/* Enterprise plam card */}
                    <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col space-y-6">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-1">Enterprise</h2>
                            <p className="text-gray-500 text-sm ">For teams and businesses</p>
                        </div>
                        <div className="flex items-baseline mb-8">
                            <span className="text-4xl font-extrabold text-slate-900 tracking-tight">$99</span>
                            <span className="text-sm font-medium text-slate-400 ml-1">/Month</span>
                        </div>
                        <ul className="space-y-3.5 mb-8 text-sm">
                            <li className='flex items-center gap-2.5'><img src={tickMarck} alt="" />Everything in Pro</li>
                            <li className='flex items-center gap-2.5'><img src={tickMarck} alt="" />Team collaboration</li>
                            <li className='flex items-center gap-2.5'><img src={tickMarck} alt="" />Custom integrations</li>
                            <li className='flex items-center gap-2.5'><img src={tickMarck} alt="" />Dedicated support</li>
                            <li className='flex items-center gap-2.5'><img src={tickMarck} alt="" />SLA guarantee</li>
                            <li className='flex items-center gap-2.5'><img src={tickMarck} alt="" />Custom branding</li>
                        </ul>
                        {/* btn */}

                        <button className='w-full py-3 px-6 rounded-full font-medium text-sm bg btn text-white hover:bg-indigo-700 transition-colors'>Contact Sales</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;