import { useState } from "react";

const ProductCard = ({ product, handleAddToCart }) => {
    const [isBuy, setIsBuy] = useState(false)
    
    return (
        <div className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-lg transition-all duration-300">

            {/* Card Body */}
            <div className="card-body p-5">

                {/* Top */}
                <div className="flex justify-between items-start">

                    {/* Icon */}
                    <img
                        src={product.icon}
                        alt={product.name}
                        className="w-10 h-10 object-contain"
                    />

                    {/* Tag */}
                    <div>
                        {product.tagType === "best-seller" && (
                            <div className="badge badge-warning badge-sm">
                                {product.tag}
                            </div>
                        )}

                        {product.tagType === "popular" && (
                            <div className="badge badge-info badge-sm">
                                {product.tag}
                            </div>
                        )}

                        {product.tagType === "new" && (
                            <div className="badge badge-success badge-sm">
                                {product.tag}
                            </div>
                        )}
                    </div>
                </div>


                {/* Name */}
                <h2 className="card-title text-xl mt-3">
                    {product.name}
                </h2>


                {/* Description */}
                <p className="text-sm text-base-content/60 min-h-15">
                    {product.description}
                </p>


                {/* Price */}
                <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-2xl font-bold">
                        ${product.price}
                    </span>

                    <span className="text-sm text-base-content/60">

                        / {product.period === "monthly" ? "Mo" : product.period === "yearly" ? "Year" : "One-Time"}
                    </span>
                </div>


                {/* Features */}
                <ul className="space-y-2 mt-3">
                    {product.features.map((feature, index) => (
                        <li
                            key={index}
                            className="flex items-center gap-2 text-sm text-base-content/70"
                        >
                            <span className="text-success">✓</span>
                            {feature}
                        </li>
                    ))}
                </ul>


                {/* Button */}
                <div className="card-actions mt-4">
                    <button onClick={() => { handleAddToCart(product); setIsBuy(true); }} className="btn bg text-white w-full rounded-full">
                        {isBuy ? "Added To Cart" : "Buy Now"}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ProductCard;