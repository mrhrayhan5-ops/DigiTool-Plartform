import { use, useState } from "react";
import ProductsCard from "./ProductsCard";
import Cart from "./Cart";


const Products = ({ productsPromise, cart, setCart }) => {
    const products = use(productsPromise)

    const [activeTab, setActiveTab] = useState("products")


    // add product or increase quntity
    const handleAddToCart = (product) => {
      const isExist = cart.find((item)=> item.id === product.id);
      if(isExist){
        alert("Ietem already added to cart!");
        return;
      }
      setCart([...cart, product]);
    };

    // remove item from cart 
    const handleRemoveFromCart = (productId) => {
       setCart(cart.filter((item)=> item.id !== productId));
    };

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold">Premium Digital Tools</h2>
                    <p className="mt-3 text-gray-600 text-sm sm:text-base">Choose from our curated collection of premium digital products designed
                        to boost your productivity and creativity.</p>
                </div>
                {/* toggal btn */}
                <div className="flex justify-center gap-5 mb-10">

                    <div className="tabs tabs-box justify-center gap-5 mb-10 bg-transparent">
                        <input type="radio" name="my_tabs_1" className="tab rounded-full px-8" aria-label="Products" defaultChecked onClick={() => setActiveTab("products")} />

                        <input type="radio" name="my_tabs_1" className="tab rounded-full px-8" aria-label= {`Cart (${cart.length})`}onClick={() => setActiveTab("cart")} />

                    </div>
                </div>
                {/* product grid */}
                {activeTab === "products" && (
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product) => (
                                <ProductsCard key={product.id} product={product} handleAddToCart={handleAddToCart} />
                            ))}
                        </div>
                    </div>
                )}
                {/* cart */}
                {activeTab === "cart" && (
                    <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
                )}
            </div>
        </div>
    );
};

export default Products;