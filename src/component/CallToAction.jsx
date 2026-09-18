

const CallToAction = () => {
    return (
        <div className="bg text-white py-20 px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-6">

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                    Ready To Transform Your Workflow?
                </h2>


                <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
                    Join thousands of professionals who are already using Digitools to work smarter.<br className="hidden sm:block" />
                    Start your free trial today.
                </p>


                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                    <a href="#"
                        className="btn btn-lg bg-white text-indigo-900 hover:bg-gray-100 border-none rounded-full px-8 font-semibold shadow-md w-full sm:w-auto">
                        Explore Products
                    </a>
                    <a href="#"
                        className="btn btn-lg btn-outline text-white border-white/50 hover:bg-white/10 hover:border-white rounded-full px-8 font-semibold w-full sm:w-auto">
                        View Pricing
                    </a>
                </div>


                <p className="text-xs sm:text-sm text-purple-200/80 pt-2">
                    14-day free trial &bull; No credit card required &bull; Cancel anytime
                </p>
            </div>
        </div>
    );
};

export default CallToAction;