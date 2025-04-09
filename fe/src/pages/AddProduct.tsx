import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { createProduct } from '../services/api';

function ProductFormPage() {
    const navigate = useNavigate();

    // State for form fields
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(''); // Store as string for easier input handling
    const [rating, setRating] = useState(''); // Store as string initially
    const [categories, setCategories] = useState(''); // Using comma-separated string for simplicity


    return (
        <div className="container mx-auto p-6 max-w-2xl">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Product</h1>

            <form onSubmit={()=>{}} className="bg-white p-8 rounded-lg shadow-md space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Product Name
                    </label>
                    <input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50"
                        placeholder="e.g., High-Performance Laptop"
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        rows={4}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50"
                        placeholder="Detailed description of the product..."
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                            Price ($)
                        </label>
                        <input
                            id="price"
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50"
                            placeholder="e.g., 999.99"
                        />
                    </div>

                    <div>
                        <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                            Rating
                        </label>
                        <input
                            id="rating"
                            type="text"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50"
                            placeholder="e.g., 4.5"
                        />
                    </div>
                </div>


                <div>
                    <label htmlFor="categories" className="block text-sm font-medium text-gray-700 mb-1">
                        Categories
                    </label>
                    <input
                        id="categories"
                        type="text"
                        value={categories}
                        onChange={(e) => setCategories(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50"
                        placeholder="e.g., Electronics, Laptops, Work"
                    />
                    <p className="mt-1 text-xs text-gray-500">Separate multiple categories with a comma.</p>
                </div>


                <div className="flex justify-end space-x-3">
                    <button
                        type="button"
                        onClick={() => navigate('/')}
                        className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ProductFormPage;