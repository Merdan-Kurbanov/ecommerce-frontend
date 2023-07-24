import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

interface Product {
  id: number;
  imageUrl: string;
  brand: string;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
}

const ProductForm: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams<{ id: string }>();
  const authtoken = Cookies.get("_auth") as string;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get<Product>(
          `https://localhost:7137/api/product/${id}`,
          {
            headers: {
              Authorization: `Bearer ${authtoken}`,
            },
          }
        );
        setProduct(response.data.data);
        //console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    void fetchProduct();
  }, [id]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    const { name, value } = event.target;
    setProduct((prevProduct) => {
      if (prevProduct) {
        return { ...prevProduct, [name]: value };
      }
      return prevProduct;
    });
  };
  

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => {
      if (prevProduct) {
        return { ...prevProduct, [name]: value };
      }
      return prevProduct;
    });
  };
  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    console.log(product)
    try {
      await axios.put(
        `https://localhost:7137/api/Product/${id}`,
        product,
        {
          headers: {
            Authorization: `Bearer ${authtoken}`,
          },
        }
      );
      console.log("Product updated successfully");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto  h-full flex flex-col justify-center">
      <div className="p-5">
        <h1 className="dark:text-white text-black text-2xl my-5 font-semibold">
          Product Edit
        </h1>
        <div className="mb-4 ">
          <label
            htmlFor="name"
            className="block text-gray-700 dark:text-gray-400 font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={product?.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300  rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4 ">
          <label
            htmlFor="name"
            className="block text-gray-700 dark:text-gray-400 font-semibold mb-2"
          >
            Brand
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={product?.brand}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300  rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="imageUrl"
            className="block text-gray-700 dark:text-gray-400 font-semibold mb-2"
          >
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageSrc"
            value={product?.imageUrl}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 dark:text-gray-400 font-semibold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={product?.description}
            onChange={handleTextareaChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 dark:text-gray-400 font-semibold mb-2"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={product?.price}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="discountPrice"
            className="block text-gray-700 dark:text-gray-400 font-semibold mb-2"
          >
            Discount Price
          </label>
          <input
            required
            type="number"
            id="discountPrice"
            name="discountPrice"
            value={product?.discountPrice}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
