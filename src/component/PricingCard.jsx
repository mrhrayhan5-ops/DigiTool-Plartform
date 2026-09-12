

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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* stater plan card*/}
                    <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col space-y-6">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-1">Stater</h2>
                            <p className="text-gray-500 text-sm leading-relaxed">Perfect for getting started</p>
                        </div>
                        <div>
                            <h1 className="text-gray-500 text-sm leading-relaxed"><span className="text-3xl font-bold text-gray-900">$0</span>/Month</h1>
                        </div>
                        <div className="text-gray-500 text-sm leading-relaxed">
                            <p>Access to 10 free tools</p>
                            <p>Basic templates</p>
                            <p>Community support</p>
                            <p>1 project per month</p>
                        </div>
                        {/* btn */}
                        <div className="">
                            <button className="btn">Get Started Free</button>
                        </div>
                    </div>
                    {/* pro plan card */}
                    <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col space-y-6 relative">
                        <div className="absolute -top-3 left-34 ">
                            <p className="bg-[#fef3c6] text-sm text-[#bb4d00] px-4 py-1 rounded-full ">Most Popular</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-1">Pro</h2>
                            <p className="text-gray-500 text-sm leading-relaxed">Best for professionals</p>
                        </div>
                        <div>
                            <h1 className="text-gray-500 text-sm leading-relaxed"><span className="text-3xl font-bold text-gray-900">$29</span>/Month</h1>
                        </div>
                        <div className="text-gray-500 text-sm leading-relaxed">
                            <p>Access to all premium tools</p>
                            <p>Unlimited templates</p>
                            <p>Priority support</p>
                            <p>Unlimited projects</p>
                            <p>Cloud sync</p>
                            <p>Advanced analytics</p>
                        </div>
                        {/* btn */}
                        <div>
                            <button>Start Pro Trial</button>
                        </div>
                    </div>
                    {/* Enterprise plam card */}
                    <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col space-y-6">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-1">Enterprise</h2>
                            <p className="text-gray-500 text-sm leading-relaxed">For teams and businesses</p>
                        </div>
                        <div>
                            <h1 className="text-gray-500 text-sm leading-relaxed"><span className="text-3xl font-bold text-gray-900">$99</span>/Month</h1>
                        </div>
                        <div className="text-gray-500 text-sm leading-relaxed">
                            <p>Everything in Pro</p>
                            <p>Team collaboration</p>
                            <p>Custom integrations</p>
                            <p>Dedicated support</p>
                            <p>SLA guarantee</p>
                            <p>Custom branding</p>
                        </div>
                        {/* btn */}
                        <div>
                            <button>Contact Sales</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;