

const Footer = () => {
    return (
        <footer class="bg-[#0b1329] text-gray-300">
            {/* main conetnt */}
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
                {/*col-1 Brand info */}
                <div className="md:col-span-1 space-y-3">
                    <h2 className="text-2xl font-bold text-white">DigiTools</h2>
                    <p class="text-sm text-gray-400 leading-relaxed">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                {/* col-2 product */}
                <div class="flex flex-col space-y-2 text-sm">
                    <h3 class="font-semibold text-white mb-1">Product</h3>
                    <a href="#" class="hover:text-white transition-colors">Features</a>
                    <a href="#" class="hover:text-white transition-colors">Pricing</a>
                    <a href="#" class="hover:text-white transition-colors">Templates</a>
                    <a href="#" class="hover:text-white transition-colors">Integrations</a>
                </div>
                {/* col-3 company */}
                <div class="flex flex-col space-y-2 text-sm">
                    <h3 class="font-semibold text-white mb-1">Company</h3>
                    <a href="#" class="hover:text-white transition-colors">About</a>
                    <a href="#" class="hover:text-white transition-colors">Blog</a>
                    <a href="#" class="hover:text-white transition-colors">Careers</a>
                    <a href="#" class="hover:text-white transition-colors">Press</a>
                </div>
                {/* col-4  resources */}
                <div class="flex flex-col space-y-2 text-sm">
                    <h3 class="font-semibold text-white mb-1">Resources</h3>
                    <a href="#" class="hover:text-white transition-colors">Documentation</a>
                    <a href="#" class="hover:text-white transition-colors">Help Center</a>
                    <a href="#" class="hover:text-white transition-colors">Community</a>
                    <a href="#" class="hover:text-white transition-colors">Contact</a>
                </div>
                {/* col-5 social link */}
                <div className="space-y-3">
                    <h3 class="font-semibold text-white mb-1">Scoial Link</h3>
                    <div class="flex items-center space-x-3">
                        {/* icon 1 */}
                        <a href="#"
                            class="w-9 h-9 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        {/* icon 2 */}
                        <a href="#"
                            class="w-9 h-9 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path
                                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        {/* icon 3 */}
                        <a href="#"
                            class="w-9 h-9 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="border-t border-slate-800">
                <div class="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 space-y-4 sm:space-y-0">
                    <p>&copy; 2026 Digitools. All rights reserved.</p>
                    <div class="flex items-center space-x-6">
                        <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" class="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;