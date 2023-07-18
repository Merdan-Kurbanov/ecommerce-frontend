import React, { useState, ChangeEvent, FormEvent } from 'react';

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

const ProductForm: React.FC = () => {
  const [formData, setFormData] = useState<Partial<Product>>({
    id: 0,
    imageSrc: '',
    brand: '',
    productName: '',
    description: '',
    price: 0,
    discountPrice: 0,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto  h-full flex flex-col justify-center">
      <div className='p-5'>
        <h1 className='dark:text-white text-black text-2xl my-5 font-semibold'>Product Edit</h1>
      <div className="mb-4 ">
        <label htmlFor="name" className="block text-gray-700 dark:text-gray-400 font-semibold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="productName"
          value={formData.productName || ''}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300  rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="imageUrl" className="block text-gray-700 dark:text-gray-400 font-semibold mb-2">
          Image URL
        </label>
        <input
          type="text"
          id="imageUrl"
          name="imageSrc"
          value={formData.imageSrc || ''}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 dark:text-gray-400 font-semibold mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description || ''}
          onChange={handleTextareaChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 dark:text-gray-400 font-semibold mb-2">
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price || ''}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="discountPrice" className="block text-gray-700 dark:text-gray-400 font-semibold mb-2">
          Discount Price
        </label>
        <input
          type="number"
          id="discountPrice"
          name="discountPrice"
          value={formData.discountPrice || ''}
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