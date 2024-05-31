"use client";
import Image from "next/image";

export default function ProductDetailModal({ product, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white mx-2 p-6 rounded shadow-lg flex flex-col md:flex-row gap-10 sm:w-2/3 lg:w-2/4">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          quality={75}
          className="md:w-52 md:h-64 w-full h-52 md:object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold mb-4">{product.title}</h2>

          <p className="text-gray-700 text-sm leading-6 mb-4 line-clamp-6">
            {product.description}
          </p>
          <p className="text-2xl font-semibold mb-4">
            <span className="relative -top-2 font-medium text-base">$</span>
            {product.price}
          </p>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
