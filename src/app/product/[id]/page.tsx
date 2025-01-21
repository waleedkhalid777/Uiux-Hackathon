// src/app/product/[id]/page.tsx
import React from "react";
import Client from "@/sanity/lib/sanityclient";

type Product = {
  id: string;
  title: string;
  description: string;
  image?: string;
  price: number;
  tags?: string[];
  discountPercentage?: number;
  isNew?: boolean;
};

type ProductPageProps = {
  product: Product | null;
};

const ProductDetails = ({ product }: ProductPageProps) => {
  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <img
            src={product.image || "placeholder-image-url"}
            alt={product.title}
            className="w-full max-w-sm h-auto object-cover rounded-md shadow-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">{product.title}</h1>
          <p className="mt-2 text-gray-600">{product.description}</p>
          <p className="mt-4 text-xl font-bold text-green-600">Rp {product.price}</p>

          {product.isNew && (
            <span className="inline-block mt-2 px-4 py-1 text-sm text-white bg-blue-500 rounded-full">
              New Arrival
            </span>
          )}
          {product.discountPercentage && (
            <span className="inline-block mt-2 ml-4 px-4 py-1 text-sm text-white bg-red-500 rounded-full">
              {product.discountPercentage}% Off
            </span>
          )}

          <div className="mt-6">
            {product.tags && (
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block text-sm text-white bg-gray-800 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Fetch product data directly in the component
const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  try {
    // Fetch product data using the Sanity client
    const data = await Client.fetch(
      `*[_type == "product" && _id == $id] {
        _id,
        title,
        description,
        "image": productImage.asset->url,
        price,
        tags,
        discountPercentage,
        isNew
      }`,
      { id }
    );

    if (data.length === 0) {
      return <p>No product found for this ID.</p>;
    }

    return <ProductDetails product={data[0]} />;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return <p>Failed to load product details. Please try again later.</p>;
  }
};

export default ProductDetailsPage;
