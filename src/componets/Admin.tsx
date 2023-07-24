import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
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


const AdminPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const authtoken = Cookies.get("_auth") as string;

  const fetchProducts = async () => {
    try {
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

  const handleEdit = (id: number) => {
    console.log(`Editing product with id ${id}`);
  };

 

  const handleDelete = (id: number): void => {
    axios
      .delete(`https://localhost:7137/api/product/${id}`, {
        headers: {
          Authorization: `Bearer ${authtoken}`,
        },
      })
      .then((response) => {
        console.log(`Product with id ${id} deleted successfully`);
        setProducts(products.filter((product) => product.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="bg-transparent py-12 max-w-6xl mx-auto ">
      <div className="container mx-auto px-4 py-10 ">
        <div className="p-4 bg-transparent pt-10 ">
          <h1 className="text-2xl font-bold mb-4 text-gray-700 dark:text-white">Products</h1>
          <ul className='space-y-6 '>
            {products.map((product) => (
              <li key={product.id} className="flex justify-between items-center mb-2 bg-gray-100 dark:bg-secondary p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <img src={product.imageUrl} alt={product.productName} className="w-16 h-16 rounded-md mr-4" />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{product.productName}</h2>
                    <p className="text-sm text-gray-600 dark:text-white">{product.description}</p>
                    <div className="mt-2">
                      {product.discountPrice ? (
                        <>
                          <span className="text-sm text-red-500 font-semibold mr-2">{`$${product.discountPrice}`}</span>
                          <span className="text-sm text-gray-500 line-through dark:text-gray-100">{`$${product.price}`}</span>
                        </>
                      ) : (
                        <span className="text-sm text-gray-500 ">{`$${product.price}`}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <Link
                    to={`/admin/productedit/${product.id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
                    onClick={() => handleEdit(product.id)}
                  >
                    Edit
                  </Link>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdminPage;