import React from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  imageSrc: string;
  brand: string;
  productName: string;
  description: string;
  price: number;
  discountPrice: number;
}

const productData: Product[] = [
  {
    id: 1,
    imageSrc:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    brand: "KOTON",
    productName: "Kazak",
    description:
      "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO ",
    price: 14,
    discountPrice: 199,
  },
  {
    id: 2,
    imageSrc:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    brand: "KOTON",
    productName: "Short",
    description:
      "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO ",
    price: 28,
    discountPrice: 199,
  },
  {
    id: 3,
    imageSrc:
      "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    brand: "KOTON",
    productName: "Elbise",
    description:
      "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO ",
    price: 81,
    discountPrice: 199,
  },
  {
    id: 4,
    imageSrc:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    brand: "KOTON",
    productName: "T-shirt",
    description:
      "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO ",
    price: 99.99,
    discountPrice: 199,
  },
  {
    id: 5,
    imageSrc:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    brand: "KOTON",
    productName: "Gomlek",
    description:
      "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO ",
    price: 56,
    discountPrice: 199,
  },
  {
    id: 6,
    imageSrc:
      "https://images.unsplash.com/photo-1582142839970-2b9e04b60f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    brand: "KOTON",
    productName: "Jeans",
    description:
      "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO ",
    price: 89.99,
    discountPrice: 199,
  },
  {
    id: 7,
    imageSrc:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    brand: "KOTON",
    productName: "Kazak",
    description:
      "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO ",
    price: 65,
    discountPrice: 199,
  },
  {
    id: 8,
    imageSrc:
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    brand: "KOTON",
    productName: "Pantalon",
    description:
      "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO ",
    price: 129,
    discountPrice: 199,
  },
  // Add more products here...
];

const ProductsSection: React.FC = () => (
  <section
    id="Projects"
    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 pb-16"
  >
    {productData.map((product) => (
      <Link
        to={`/productDetail/${product.id}`}
        key={product.id}
        className="w-72 bg-white dark:bg-secondary shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
      >
        <a href="#">
          <img
            src={product.imageSrc}
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

export default ProductsSection;
