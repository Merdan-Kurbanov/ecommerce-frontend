import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

interface Product {
  id: number;
  imageUrl: string;
  brand: string;
  productName: string;
  description: string;
  price: number;
  discountPrice: number;
}

const ProductsSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const authtoken = Cookies.get("_auth") as string;

  // Set the default Authorization header for all axios requests
  //axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const fetchProducts = async () => {
    try {
      // Make the GET request to the API endpoint with the token in headers
      const response = await axios.get<Product[]>(
        "https://localhost:7137/api/product",
        {
          headers: {
            Authorization: `Bearer ${authtoken}`,
          },
        }
      );

      setProducts(response.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    void fetchProducts();
  }, []);

  return (
    <section
      id="Projects"
      className="w-fit mx-auto lg:pt-40 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 pb-16"
    >
      {products.map((product) => (
        <Link
          to={`/productDetail/${product.id}`}
          key={product.id}
          className="w-72 bg-white dark:bg-secondary shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <a href="#">
            <img
              src={product.imageUrl}
              alt={product.productName}
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                {product.brand}
              </span>
              <p className="text-lg font-bold text-black dark:text-white truncate block capitalize">
                {product.productName}
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black dark:text-white cursor-auto my-3">
                  ${product.price}
                </p>
                <del>
                  <p className="text-sm text-gray-600 dark:text-white cursor-auto ml-2">
                    ${product.discountPrice}
                  </p>
                </del>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus fill-black dark:fill-white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </section>
  );
};

export default ProductsSection;
