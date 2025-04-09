import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from "../components/ProductCard.tsx";

const placeholderProducts = [
    { id: 1, name: 'Laptop Pro X', description: 'High-performance laptop for professionals.', price: 1499, category: 'Electronics', rating: '4.8' },
    { id: 2, name: 'Wireless Keyboard', description: 'Ergonomic and silent wireless keyboard.', price: 79, category: 'Accessories', rating: '4.5' },
    { id: 3, name: '4K Monitor', description: '27-inch 4K UHD Monitor with HDR.', price: 399, category: 'Electronics', rating: '4.7' },
    { id: 4, name: 'Ergonomic Mouse', description: 'Vertical mouse to reduce wrist strain.', price: 45, category: 'Accessories', rating: '4.3' },
    { id: 5, name: 'Webcam HD', description: '1080p HD webcam with built-in microphone.', price: 60, category: 'Electronics', rating: '4.6' },
    { id: 6, name: 'Standing Desk', description: 'Adjustable height electric standing desk.', price: 299, category: 'Furniture', rating: '4.9' },
];

function Home() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedRating, setSelectedRating] = useState('');

    const filteredProducts = placeholderProducts.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddProductClick = () => {
        navigate('/product')
    };

    const handleEdit = (id: number) => {

        alert(`Edit product ${id}`);
    }

    const handleDelete = (id: number) => {

        if (window.confirm(`Are you sure you want to delete product ${id}?`)) {
            alert(`Deleting product ${id}`);
        }
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Simple Navbar */}
            <nav className="bg-white shadow-md p-4">
                <div className="container mx-auto">
                    <h1 className="text-2xl font-bold text-gray-800">ProductVerse</h1>
                </div>
            </nav>

            <div className="container mx-auto p-6">
                {/* Header Section */}
                <header className="mb-6 flex justify-between items-center">
                    <h2 className="text-3xl font-semibold text-gray-700">Manage Products</h2>
                    <button
                        onClick={handleAddProductClick}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
                    >
                        + Add Product
                    </button>
                    <div >
                        <button
                            onClick={() => navigate('/login')}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded transition duration-150 ease-in-out"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => navigate('/signup')}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
                        >
                            Signup
                        </button>
                    </div>
                </header>

                {/* Controls Section */}
                <section className="mb-6 bg-white p-4 rounded-lg shadow">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Search Input */}
                        <div>
                        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                            <input
                                type="text"
                                id="search"
                                placeholder="Search by name or description..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Filter */}
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                            <select
                                id="category"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                            >
                                <option value="">All Categories</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Furniture">Furniture</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">Min Rating</label>
                            <select
                                id="rating"
                                value={selectedRating}
                                onChange={(e) => setSelectedRating(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                            >
                                <option value="">Any Rating</option>
                                <option value="4.5">4.5+</option>
                                <option value="4">4+</option>
                                <option value="3">3+</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* Product Section */}
                <main>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    onEdit={handleEdit}
                                    onDelete={handleDelete}
                                />
                            ))
                        ) : (
                            <p className="col-span-full text-center text-gray-500 mt-8">
                                No products found matching your criteria.
                            </p>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Home;