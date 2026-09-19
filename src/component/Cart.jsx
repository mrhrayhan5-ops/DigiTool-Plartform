const Cart = ({ cart = [], handleRemoveFromCart, handleClearCart }) => {
    // Calculate total price directly without quantities
    const totalCost = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200/60 rounded-3xl p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Your Cart</h2>

                {/* Empty State */}
                {cart.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="text-5xl mb-4">🛒</div>
                        <p className="text-gray-500">Your cart is empty.</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {/* Cart Item Cards */}
                        <div className="space-y-3">
                            {cart.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex items-center justify-between bg-gray-100/70 p-4 rounded-2xl"
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={product.icon}
                                            alt={product.name}
                                            className="w-10 h-10 object-contain rounded-lg"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                                                {product.name}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-500">${product.price}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleRemoveFromCart(product.id)}
                                        className="text-red-400 hover:text-red-600 text-xs sm:text-sm font-medium transition-colors"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Total Section */}
                        <div className="flex justify-between items-end pt-2">
                            <span className="text-gray-400 text-sm">Total</span>
                            <span className="text-2xl sm:text-3xl font-bold text-gray-900">${totalCost}</span>
                        </div>

                        {/* Non-functional Checkout Button */}
                        <button
                            type="button"
                            onClick={handleClearCart}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3.5 rounded-2xl transition duration-200 text-sm sm:text-base shadow-sm"
                        >
                            Proceed To Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;