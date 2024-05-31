"use client";
import Image from "next/image";

export default function ProductCard({ product, onSelect }) {
  return (
    <div
      key={product.id}
      className="bg-white border max-h-full p-4 rounded shadow  h-full flex flex-col"
    >
      <Image
        src={product.image}
        alt={product.title}
        width={500}
        height={500}
        quality={75}
        className="h-60 w-full md:h-48 mb-4"
      />

      <div className="flex flex-col justify-between  flex-grow">
        <div>
          <h2 className="text-base line-clamp-1 font-medium mt-2">
            {product.title}
          </h2>
          <p className="text-sm mt-2 bg-gray-200 py-0.5 px-2 rounded w-fit capitalize">
            {product.category}
          </p>
          <div className="text-sm text-gray-700 mt-2">
            <p>
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </p>
          </div>
          <p className="text-lg font-semibold mt-2">
            <span className="relative -top-1 font-medium text-sm">$</span>
            {product.price}
          </p>
        </div>
        <button
          onClick={() => onSelect(product)}
          className="text-sm font-medium mt-2 px-4 py-2 bg-yellow-300 text-black hover:bg-yellow-400 rounded-lg w-fit"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
