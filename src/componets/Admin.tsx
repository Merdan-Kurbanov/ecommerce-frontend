import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  discountPrice?: number;
}

const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Product 1',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO',
    price: 10,
    discountPrice: 8,
  },
  {
    id: '2',
    name: 'Product 2',
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO',
    price: 20,
  },
  {
    id: '1',
    name: 'Product 1',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO',
    price: 10,
    discountPrice: 8,
  },
  {
    id: '2',
    name: 'Product 2',
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO',
    price: 20,
  },
  {
    id: '3',
    name: 'Product 3',
    image: 'https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description: 'Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO',
    price: 30,
    discountPrice: 25,
  },
];

const AdminPage = () => {
  const [products, setProducts] = useState(initialProducts);

  const handleEdit = (id: string) => {
    // Implement your edit logic here
    console.log(`Editing product with id ${id}`);
  };

  const handleDelete = (id: string) => {
    // Implement your delete logic here
    console.log(`Deleting product with id ${id}`);
    setProducts(products.filter((product) => product.id !== id));
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
                  <img src={product.image} alt={product.name} className="w-16 h-16 rounded-md mr-4" />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{product.name}</h2>
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
                    to={"/admin/productedit"}
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